   // backend/models/Poll.js
   const mongoose = require('mongoose');

   const pollSchema = new mongoose.Schema({
       question: { type: String, required: true },
       options: [{ type: String, required: true }],
       votes: { type: [Number], default: [] },
   });

   module.exports = mongoose.model('Poll', pollSchema);