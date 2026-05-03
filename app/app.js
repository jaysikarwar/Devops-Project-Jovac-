const express = require("express");
const app = express();

app.get("/", (req, res) => {
    console.log(`Request received at ${new Date()}`);
    res.send("Hello from DevOps Project 🚀");
});

app.get("/error", (req, res) => {
    console.error("Error route hit!");
    res.status(500).send("Error generated");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});