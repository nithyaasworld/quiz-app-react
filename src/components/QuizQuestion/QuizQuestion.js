import './QuizQuestion.css';
import { useState } from 'react';
import Confetti from 'react-dom-confetti';
const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#f00", "#0f0", "#00f"]
  };
export default function QuizQuestion({ question, choices, answer, incrementQuestion, addScore }) {

    let [selected, setSelected] = useState(null);
    let [individualScore, setIndividualScore] = useState(0);
    let checkAnswer = (answerChosen) => {
        if (selected === null) {
            setSelected(answerChosen);
        }
        if (answerChosen === answer) setIndividualScore(10);
        addScore(choices[answerChosen]);
        setTimeout(() => {
            setIndividualScore(0);
            setSelected(null);
            incrementQuestion()
        }, 2000);
    }
    return (
        <div className="quiz-container">
            <p className="individual-score">Score: {individualScore }</p>
            <p className="question">{question}</p>
            <ul>
                {choices.map((choice, i) => <li className={selected === i ? answer === i ? `correct option` : 'incorrect option' : 'option'} onClick={() => checkAnswer(i)} key={i}>{choice} <Confetti active={ selected === i && answer === i ? true : false } config={ config }/></li>)}
            </ul>
        </div>
    )
}