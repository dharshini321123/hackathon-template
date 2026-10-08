const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully ✅");
    })
    .catch((error) => {
        console.log("MongoDB connection failed ❌");
        console.log(error);
    });

app.get("/", (req, res) => {
    res.send("Hackathon Backend Working 🚀");
});

app.get("/api/test", (req, res) => {
    res.json({
        message: "API is working successfully"
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});