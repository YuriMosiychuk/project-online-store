const express = require("express");
const { Pool } = require("pg");
const app = express();
const port = 3001;

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "med_app",
  user: "postgres",
  password: "13579012468",
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); 
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  ); 
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  ); 
  res.setHeader("Access-Control-Allow-Credentials", true); 
  next();
});

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM items");
    const items = result.rows;
    res.json(items);
    client.release();
  } catch (err) {
    console.error("Error executing query", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
