const pool = require("../config/db");
const bcrypt = require("bcrypt");

exports.getUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: "Utilisateur non trouvé" });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// CREATE user
exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Vérifie que tous les champs sont présents
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Champs manquants" });
    }

    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insertion dans la BDD
    const result = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, hashedPassword]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("ERREUR SQL:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
 
// UPDATE user
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email } = req.body;
    const result = await pool.query(
      "UPDATE users SET username = $1, email = $2 WHERE id = $3 RETURNING *",
      [username, email, id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: "Utilisateur non trouvé" });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
 
// DELETE user
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: "Utilisateur non trouvé" });
    res.json({ message: "Utilisateur supprimé" });
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

