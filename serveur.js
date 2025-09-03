require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
 
// Middleware
app.use(express.json());

// Import des routes

const userRoutes = require("./backend/routes/users");
const feedRoutes = require("./backend/routes/feeds");
const commentRoutes = require("./backend/routes/comments");
const favoriteRoutes = require("./backend/routes/favorites");
 
// Connexion des routes
app.use("/api/users", userRoutes);
app.use("/api/feeds", feedRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/favorites", favoriteRoutes);
 
// Lancement du serveur

app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
}); 
