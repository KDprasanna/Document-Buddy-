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
    },
    status: {
    type: String,
    default: "Not Started"
},
reminder: {
    type: String,
    default: ""
}
});

module.exports = mongoose.model("Document", documentSchema);