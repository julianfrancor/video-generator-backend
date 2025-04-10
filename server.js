// backend/server.js
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();


app.use(cors({
  origin: 'https://extensions.shopifycdn.com',
  methods: ['POST', 'GET'],
  allowedHeaders: ['Content-Type'],
}));

app.use(bodyParser.json());

app.post("/api/generate-video", async (req, res) => {
  try {
    const product = req.body;
    console.log("📦 Recibido producto:", product);

    const makeResponse = await fetch(process.env.MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    if (!makeResponse.ok) throw new Error("Make webhook falló");

    res.status(200).json({ message: "Video request sent to Make" });
  } catch (err) {
    console.error("❌ Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Backend listening on port ${PORT}`);
});
