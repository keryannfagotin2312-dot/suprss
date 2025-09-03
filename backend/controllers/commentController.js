const pool = require("../config/db");
 
// GET all comments
exports.getComments = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM comments ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
 
// GET comment by ID
exports.getCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM comments WHERE id = $1", [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: "Commentaire non trouvé" });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
 
// CREATE comment
exports.createComment = async (req, res) => {
  try {
    const { user_id, feed_id, content } = req.body;
    const result = await pool.query(
      "INSERT INTO comments (user_id, feed_id, content) VALUES ($1, $2, $3) RETURNING *",
      [user_id, feed_id, content]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
 
// UPDATE comment
exports.updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const result = await pool.query(
      "UPDATE comments SET content = $1 WHERE id = $2 RETURNING *",
      [content, id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: "Commentaire non trouvé" });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
 
// DELETE comment
exports.deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM comments WHERE id = $1 RETURNING *", [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: "Commentaire non trouvé" });
    res.json({ message: "Commentaire supprimé" });
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
