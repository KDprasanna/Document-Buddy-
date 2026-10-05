const express = require("express");
require("dotenv").config();
const mongoose=require("mongoose");
const Document = require("./models/Document");
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));2
const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "DocumentBuddy Backend is running!"
    });
});

app.get("/api/documents", async (req, res) => {
    try {
        const documents = await Document.find();

        res.json({
            message: "Documents API is working",
            documents: documents
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching documents",
            error: error.message
        });
    }
});
app.post("/api/documents", async (req, res) => {
  try {
    const document = await Document.create(req.body);

    res.status(201).json({
      message: "Document created successfully",
      document: document
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating document",
      error: error.message
    });
  }
});
app.get("/api/documents/:id", async (req, res) => {
    try {
        const document = await Document.findById(req.params.id);

        if (!document) {
            return res.status(404).json({
                message: "Document not found"
            });
        }

        res.json(document);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching document",
            error: error.message
        });
    }
});
app.put("/api/documents/:id", async (req, res) => {
    try {
        const document = await Document.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!document) {
            return res.status(404).json({
                message: "Document not found"
            });
        }

        res.json({
            message: "Document updated successfully",
            document: document
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating document",
            error: error.message
        });
    }
});
app.delete("/api/documents/:id", async (req, res) => {
  try {
    const document = await Document.findByIdAndDelete(req.params.id);

    if (!document) {
      return res.status(404).json({
        message: "Document not found"
      });
    }

    res.json({
      message: "Document deleted successfully",
      document: document
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting document",
      error: error.message
    });
  }
});
app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});