import pool from "../db.js";

const getOrders = async (req, res) => {
  try {
    const { empresa } = req.query;

    if (!empresa) {
      return res.status(400).json({ message: "Empresa obrigatoria" });
    }

    const result = await pool.query(
      `SELECT 
         o.id, o.product, o.date, o.status, o.empresa,
         json_agg(json_build_object(
           'client',   oc.client,
           'quantity', oc.quantity,
           'value',    oc.value
         )) AS clients,
         SUM(oc.value * oc.quantity) AS total
       FROM orders o
       LEFT JOIN order_clients oc ON oc.order_id = o.id
       WHERE o.empresa = $1
       GROUP BY o.id
       ORDER BY o.date DESC`,
      [empresa]
    );

    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};

const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `SELECT 
         o.id, o.product, o.date, o.status, o.empresa,
         json_agg(json_build_object(
           'client',   oc.client,
           'quantity', oc.quantity,
           'value',    oc.value
         )) AS clients,
         SUM(oc.value * oc.quantity) AS total
       FROM orders o
       LEFT JOIN order_clients oc ON oc.order_id = o.id
       WHERE o.id = $1
       GROUP BY o.id`,
      [id]
    );

    if (!result.rows[0]) {
      return res.status(404).json({ message: "Pedido não encontrado" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error fetching order:", err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};

// body: { company, product, date, clients: [{ client, quantity, value }] }
const newOrder = async (req, res) => {
  const client = await pool.connect();
  try {
    const { company, product, date, clients } = req.body;

    if (!company || !product || !date || !clients?.length) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }

    await client.query("BEGIN");

    const orderResult = await client.query(
      `INSERT INTO orders (product, date, status, empresa)
       VALUES ($1, $2, 'pending', $3)
       RETURNING *`,
      [product, date, company]
    );

    const order = orderResult.rows[0];

    for (const entry of clients) {
      await client.query(
        `INSERT INTO order_clients (order_id, client, quantity, value)
         VALUES ($1, $2, $3, $4)`,
        [order.id, entry.client, entry.quantity, entry.value]
      );
    }

    await client.query("COMMIT");

    res.status(201).json(order);
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("Error creating order:", err);
    res.status(500).json({ message: "Erro interno do servidor" });
  } finally {
    client.release();
  }
};

const updateOrder = async (req, res) => {
  const client = await pool.connect();
  try {
    const { id } = req.params;
    const { product, date, status, clients } = req.body;

    await client.query("BEGIN");

    const orderResult = await client.query(
      `UPDATE orders
       SET product = $1, date = $2, status = $3
       WHERE id = $4
       RETURNING *`,
      [product, date, status, id]
    );

    if (!orderResult.rows[0]) {
      await client.query("ROLLBACK");
      return res.status(404).json({ message: "Pedido não encontrado" });
    }

    await client.query("DELETE FROM order_clients WHERE order_id = $1", [id]);

    for (const entry of clients) {
      await client.query(
        `INSERT INTO order_clients (order_id, client, quantity, value)
         VALUES ($1, $2, $3, $4)`,
        [id, entry.client, entry.quantity, entry.value]
      );
    }

    await client.query("COMMIT");

    res.json(orderResult.rows[0]);
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("Error updating order:", err);
    res.status(500).json({ message: "Erro interno do servidor" });
  } finally {
    client.release();
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM order_clients WHERE order_id = $1", [id]);

    const result = await pool.query(
      "DELETE FROM orders WHERE id = $1 RETURNING *",
      [id]
    );

    if (!result.rows[0]) {
      return res.status(404).json({ message: "Pedido não encontrado" });
    }

    res.json({ message: "Pedido removido com sucesso" });
  } catch (err) {
    console.error("Error deleting order:", err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};

export { getOrders, getOrderById, newOrder, updateOrder, deleteOrder };
