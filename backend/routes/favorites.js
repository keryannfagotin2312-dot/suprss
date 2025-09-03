const express = require("express");
const router = express.Router();
const favoriteController = require("../controllers/favoriteController");
 
// Routes CRUD favorites
router.get("/", favoriteController.getFavorites);
router.get("/:id", favoriteController.getFavoriteById);
router.post("/", favoriteController.createFavorite);
router.delete("/:id", favoriteController.deleteFavorite);
 
module.exports = router;
