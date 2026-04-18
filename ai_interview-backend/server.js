const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const questionRoute = require("./routes/question");
const evaluateRoute = require("./routes/evaluate");

const app = express();

app.use(cors());
app.use(express.json());

// DB Connection
mongoose.connect("mongodb://127.0.0.1:27017/ai_interview", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api", questionRoute);
app.use("/api", evaluateRoute);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
