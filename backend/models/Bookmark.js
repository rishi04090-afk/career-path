const mongoose = require('mongoose');

const BookmarkSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  careerId: {
    type: String,
    required: true
  },
  careerTitle: String,
  careerIcon: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Index for efficient queries
BookmarkSchema.index({ userId: 1, careerId: 1 }, { unique: true });

module.exports = mongoose.model('Bookmark', BookmarkSchema);
