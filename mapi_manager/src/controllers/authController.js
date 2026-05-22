import pool from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const login = async (req, res) => {

    try {
        const { email, password, empresa } = req.body;

        if (!email || !password || !empresa) {
            return res.status(400).json({ message: "Todos os campos são obrigatórios" });
        }

        const result = await pool.query(
            "SELECT * FROM users WHERE email = $1 AND empresa = $2",
            [email, empresa]
        );
    const user = result.rows[0];

    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ 
        id: user.id, 
        email: user.email, 
        role: user.role, 
        empresa: user.empresa }, 
        process.env.JWT_SECRET, { expiresIn: "1h" });

     res.json({
            token,
            user: {
                id:      user.id,
                name:    user.name,
                email:   user.email,
                role:    user.role,
                empresa: user.empresa,
            }
        });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ message: "Erro interno do servidor" }); 
    }
}

const me = async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT id, name, email, role, empresa, created_at FROM users WHERE id = $1",
            [req.user.id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Error fetching user data:", err);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
};

export { login, me };

