require("dotenv").config();
const express = require("express");
const { MongoClient } = require('mongodb');
const app = express();
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

