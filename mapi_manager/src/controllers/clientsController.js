import pool from "../db.js";

const getClients = async (req, res) => {
  try {
    const { empresa } = req.query;

    if (!empresa) {
      return res.status(400).json({ message: "Empresa obrigatoria" });
    }

    const result = await pool.query(
      "SELECT * FROM clients WHERE empresa = $1 ORDER BY name ASC",
      [empresa]
    );

    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching clients:", err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};

const getClientById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "SELECT * FROM clients WHERE id = $1",
      [id]
    );

    if (!result.rows[0]) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error fetching client:", err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};

const newClient = async (req, res) => {
  try {
    const { name, empresa, status, phone, city } = req.body;

    if (!name || !empresa) {
      return res.status(400).json({ message: "Nome e empresa são obrigatórios" });
    }

    const result = await pool.query(
      `INSERT INTO clients (name, empresa, status, phone, city)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [name, empresa, status ?? true, phone, city]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error creating client:", err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};

const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, empresa, status, phone, city } = req.body;

    const result = await pool.query(
      `UPDATE clients
       SET name = $1, empresa = $2, status = $3, phone = $4, city = $5
       WHERE id = $6
       RETURNING *`,
      [name, empresa, status, phone, city, id]
    );

    if (!result.rows[0]) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error updating client:", err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};

const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM clients WHERE id = $1 RETURNING *",
      [id]
    );

    if (!result.rows[0]) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }

    res.json({ message: "Cliente removido com sucesso" });
  } catch (err) {
    console.error("Error deleting client:", err);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};

export { getClients, getClientById, newClient, updateClient, deleteClient };
