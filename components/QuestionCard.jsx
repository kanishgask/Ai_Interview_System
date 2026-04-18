import React, { useState } from "react";
import axios from "axios";

function QuestionCard() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const getQuestion = async () => {
    const res = await axios.get("http://localhost:5000/api/question");
    setQuestion(res.data.question);
  };

  const submitAnswer = async () => {
    const res = await axios.post("http://localhost:5000/api/evaluate", {
      answer,
    });

    setFeedback(res.data.feedback);
  };

  return (
    <div>
      <button onClick={getQuestion}>Get Question</button>
      <h3>{question}</h3>

      <textarea
        rows="5"
        cols="50"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <br />
      <button onClick={submitAnswer}>Submit</button>

      <p>{feedback}</p>
    </div>
  );
}

export default QuestionCard;
