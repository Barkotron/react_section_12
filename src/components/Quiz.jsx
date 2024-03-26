import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestion = userAnswers.length;
  const quizComplete = activeQuestion === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizComplete) {
    return (
      <Summary userAnswers={userAnswers}></Summary>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestion}
        index={activeQuestion}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      ></Question>
    </div>
  );
}
