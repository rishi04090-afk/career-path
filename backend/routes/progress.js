const express = require('express');
const jwt = require('jsonwebtoken');
const Progress = require('../models/Progress');
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

// Get progress for a career
router.get('/:careerId', requireAuth, async (req, res) => {
  try {
    const progress = await Progress.find({
      userId: req.userId,
      careerId: req.params.careerId
    });
    res.json(progress);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update step progress
router.post('/:careerId/:stepId', requireAuth, async (req, res) => {
  try {
    const { status, notes } = req.body;
    const { careerId, stepId } = req.params;

    let progress = await Progress.findOne({
      userId: req.userId,
      careerId,
      stepId: parseInt(stepId)
    });

    if (!progress) {
      progress = new Progress({
        userId: req.userId,
        careerId,
        stepId: parseInt(stepId),
        status,
        notes
      });
    } else {
      progress.status = status || progress.status;
      progress.notes = notes || progress.notes;
      progress.updatedAt = new Date();
      
      if (status === 'completed') {
        progress.completedDate = new Date();
      }
    }

    await progress.save();
    res.json({ message: 'Progress updated', progress });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get career summary
router.get('/:careerId/summary', requireAuth, async (req, res) => {
  try {
    const progress = await Progress.find({
      userId: req.userId,
      careerId: req.params.careerId
    });

    const summary = {
      total: progress.length,
      completed: progress.filter(p => p.status === 'completed').length,
      inProgress: progress.filter(p => p.status === 'in-progress').length,
      notStarted: progress.filter(p => p.status === 'not-started').length,
      completionPercentage: progress.length > 0 
        ? Math.round((progress.filter(p => p.status === 'completed').length / progress.length) * 100)
        : 0
    };

    res.json(summary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
