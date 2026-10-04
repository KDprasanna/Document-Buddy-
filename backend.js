const express = require("express");

const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "DocumentBuddy Backend is running!"
    });
});

app.get("/api/documents", (req, res) => {
    res.json({
        message: "Documents API is working",
        documents: []
    });
});

app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
});
