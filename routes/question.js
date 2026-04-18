const express = require("express");
const router = express.Router();

const questions = [
  "Explain time complexity of quicksort",
  "What is a REST API?",
  "Difference between stack and queue?",
  "Explain DB indexing",
  "Tell me about yourself"
];

router.get("/question", (req, res) => {
  const random = questions[Math.floor(Math.random() * questions.length)];
  res.json({ question: random });
});

module.exports = router;
