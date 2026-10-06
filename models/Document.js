const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    checklist: {
        type: [String]
    }
});

module.exports = mongoose.model("Document", documentSchema);