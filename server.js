require("dotenv").config();
const express = require("express");
const { MongoClient } = require('mongodb');
const app = express();
const uri = process.env.MONGO_URI;

const PORT = process.env.PORT || 3001;
const client = new MongoClient(uri);

app.get('/', async (req, res) => {
    try {
        await client.connect();
        res.json({ message: "Successfully connected to the database!" });
    } catch(err) {
        res.status(500).json({ message: "Failed to connect to the database." });
    }
});

app.listen(PORT, ()=> {
    console.log(`Server is running at http://localhost:${PORT}`)
});