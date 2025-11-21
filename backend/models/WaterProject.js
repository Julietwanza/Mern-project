const mongoose = require('mongoose');


const WaterProjectSchema = new mongoose.Schema({
title: { type: String, required: true, trim: true },
description: { type: String, default: '' },
location: { type: String, default: '' },
impact: { type: String, enum: ['Supply', 'Sanitation', 'Education', 'Other'], default: 'Other' },
status: { type: String, enum: ['proposed', 'ongoing', 'completed'], default: 'proposed' },
createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('WaterProject', WaterProjectSchema);
