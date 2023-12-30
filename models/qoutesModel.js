const mongoose = require('mongoose');

const QoutesSchema = new mongoose.Schema({
    qoute: String,
    author: String,
    category: String,
});

const QoutesModel = mongoose.model("Qoute", QoutesSchema);
module.exports = QoutesModel;