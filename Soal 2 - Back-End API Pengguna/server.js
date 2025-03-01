require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");

const app = express();
const PORT = 5000;

// Middleware mengizinkan aplikasi untuk membaca body dari request
app.use(bodyParser.json());

// Koneksi ke MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) {
        console.error("Database Connection Failed: ", err);
    } else {
        console.log("MySQL Connected");
    }
});

// Buat tabel jika belum ada
db.query(
    `CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
    )`,
    (err) => {
        if (err) console.error("Error creating table: ", err);
    }
);

// API Routes

// POST: Menambahkan pengguna baru
app.post("/users", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields are required!" });
    }

    try {
        // Cek apakah email sudah ada
        db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
            if (err) return res.status(500).json({ error: err.message });

            if (results.length > 0) {
                return res.status(400).json({ error: "Email already exists" });
            }

            // Hash password sebelum disimpan
            const hashedPassword = await bcrypt.hash(password, 10);

            // Simpan ke database
            db.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
                [name, email, hashedPassword],
                (err, result) => {
                    if (err) return res.status(500).json({ error: err.message });

                    res.status(201).json({ id: result.insertId, name, email });
                }
            );
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET: Mengambil semua pengguna (tanpa password)
app.get("/users", (req, res) => {
    db.query("SELECT id, name, email FROM users", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        res.json(results);
    });
});

// GET: Mengambil pengguna berdasarkan ID (tanpa password)
app.get("/users/:id", (req, res) => {
    db.query("SELECT id, name, email FROM users WHERE id = ?", [req.params.id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        if (results.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json(results[0]);
    });
});

// DELETE: Menghapus pengguna berdasarkan ID
app.delete("/users/:id", (req, res) => {
    db.query("DELETE FROM users WHERE id = ?", [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({ message: "User deleted successfully" });
    });
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT} localhost:${PORT}`));
