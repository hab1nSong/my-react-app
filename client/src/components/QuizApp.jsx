import React, { useState } from 'react';

const questions = [
  {
    question: "React의 상태 관리 훅은 무엇인가요?",
    options: ["useEffect", "useState", "useRouter", "useRef"],
    answer: "useState"
  },
  {
    question: "JSX에서 class 속성 대신 쓰는 것은?",
    options: ["class", "className", "classList", "style"],
    answer: "className"
  },
];

function QuizApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (option) => {
    setSelected(option);
    if (option === currentQuestion.answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  if (showResult) {
    return (
      <div>
        <h2>퀴즈 완료!</h2>
        <p>당신의 점수: {score} / {questions.length}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>{currentQuestion.question}</h2>
      {currentQuestion.options.map((option, i) => (
        <button
          key={i}
          onClick={() => handleAnswer(option)}
          disabled={selected !== null}
          style={{
            backgroundColor: selected === option
              ? option === currentQuestion.answer ? "green" : "red"
              : ""
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default QuizApp;