const express = require("express");
const router = express.Router();
const feedController = require("../controllers/feedController");
 
// Routes CRUD feeds
router.get("/", feedController.getFeeds);
router.get("/:id", feedController.getFeedById);
router.post("/", feedController.createFeed);
router.put("/:id", feedController.updateFeed);
router.delete("/:id", feedController.deleteFeed);
 
module.exports = router;
