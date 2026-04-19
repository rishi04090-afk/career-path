const express = require('express');
const jwt = require('jsonwebtoken');
const Bookmark = require('../models/Bookmark');
const router = express.Router();

// Middleware to verify JWT
function requireAuth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
}

// Get all bookmarks for user
router.get('/', requireAuth, async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({ userId: req.userId });
    res.json(bookmarks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add bookmark
router.post('/', requireAuth, async (req, res) => {
  try {
    const { careerId, careerTitle, careerIcon } = req.body;

    // Check if bookmark already exists
    const existing = await Bookmark.findOne({ userId: req.userId, careerId });
    if (existing) {
      return res.status(400).json({ error: 'Career already bookmarked' });
    }

    const bookmark = new Bookmark({
      userId: req.userId,
      careerId,
      careerTitle,
      careerIcon
    });

    await bookmark.save();
    res.status(201).json({ message: 'Career bookmarked', bookmark });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Remove bookmark
router.delete('/:careerId', requireAuth, async (req, res) => {
  try {
    const result = await Bookmark.findOneAndDelete({
      userId: req.userId,
      careerId: req.params.careerId
    });

    if (!result) {
      return res.status(404).json({ error: 'Bookmark not found' });
    }

    res.json({ message: 'Bookmark removed' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
