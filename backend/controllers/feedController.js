const pool = require("../config/db");
 
// GET all feeds
exports.getFeeds = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM feeds ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
 
// GET feed by ID
exports.getFeedById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM feeds WHERE id = $1", [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: "Feed non trouvé" });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
 
// CREATE feed
exports.createFeed = async (req, res) => {
  try {
    const { title, url } = req.body;
    const result = await pool.query(
      "INSERT INTO feeds (title, url) VALUES ($1, $2) RETURNING *",
      [title, url]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
 
// UPDATE feed
exports.updateFeed = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, url } = req.body;
    const result = await pool.query(
      "UPDATE feeds SET title = $1, url = $2 WHERE id = $3 RETURNING *",
      [title, url, id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: "Feed non trouvé" });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
 
// DELETE feed
exports.deleteFeed = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM feeds WHERE id = $1 RETURNING *", [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: "Feed non trouvé" });
    res.json({ message: "Feed supprimé" });
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}; 
// GET all feeds
exports.getFeeds = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM feeds");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
 
