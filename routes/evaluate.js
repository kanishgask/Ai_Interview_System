const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/evaluate", async (req, res) => {
  const { answer } = req.body;

  // Fake scoring logic (replace with real AI API)
  let score = answer.length > 50 ? 8 : 5;
  let feedback = score > 7 ? "Good answer!" : "Try to elaborate more.";

  res.json({ score, feedback });
});

module.exports = router;
