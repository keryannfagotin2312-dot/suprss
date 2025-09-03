const pool = require("../config/db");
 
// GET all favorites
exports.getFavorites = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM favorites ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
 
// GET favorite by ID
exports.getFavoriteById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM favorites WHERE id = $1", [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: "Favori non trouvé" });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
 
// CREATE favorite
exports.createFavorite = async (req, res) => {
  try {
    const { user_id, feed_id } = req.body;
    const result = await pool.query(
      "INSERT INTO favorites (user_id, feed_id) VALUES ($1, $2) RETURNING *",
      [user_id, feed_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
 
// DELETE favorite
exports.deleteFavorite = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM favorites WHERE id = $1 RETURNING *", [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: "Favori non trouvé" });
    res.json({ message: "Favori supprimé" });
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
