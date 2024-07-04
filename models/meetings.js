const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
    url: { type: String, unique: true, },
    isActive: { type: Boolean, default: false }
}, { timestamps: true });

const Meeting = mongoose.model('Meeting', meetingSchema);

module.exports = Meeting;