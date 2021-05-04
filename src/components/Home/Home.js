import QuizQuestion from "../QuizQuestion/QuizQuestion";
import { useState } from 'react';
import './Home.css';
import { useHistory } from "react-router";
import ProgressBar from '../ProgressBar/ProgressBar'

export default function Home() {
    const history = useHistory();
    let allScore = [];

    let questions = [
        { id: 0, question: "Who is current PM of India", choices: ['Narendra Modi' ,'Rahul Gandhi', 'Manmohan Singh','Sonia Gandhi'], answer: 0},
        { id: 1, question: "What is capital of Orissa", choices: ['Bhubaneshwar', 'Mumbai', 'Hyderabad', 'Chennai'], answer: 0 },
        { id: 2, question: "In the context to India's wild life, the flying fox is a ____?", choices: ['Fox', 'Bat', 'Leopard', 'Cheetah'], answer: 1 },
        { id: 3, question: "What percentage of land area should remain covered by forest to maintain Ecological balance", choices: ['33%', '50%', 'none of these',  '100%'],answer: 0 },
        { id: 4, question: "The pureset form of iron is", choices: ['Rusted iron', 'Wrought iron', 'sand iron', 'iron He'], answer: 1 }]
    let [currQuestion, setCurrQuestion] = useState(0);
    let [allScores, setAllScores] = useState([]);
    let [progressValue, setProgressValue] = useState(100);

    let changeProgressValue = () => {
        setProgressValue((p) => p - 1);
    }

    let incrementQuestion = () => {
        setProgressValue(100);
        if (currQuestion < 4) {
            setCurrQuestion(currQuestion + 1);
        } else {
            history.push({
                pathname: '/result',
                state: { allScores: allScore }
            })
        }
    }
    let addScore = (score) => {
        let allScoresCopy = allScores.slice(0);
        allScoresCopy.push(score);
        setAllScores(allScoresCopy);
        allScore = allScoresCopy;
        console.log(allScoresCopy);
    }
return (
    <div className="quiz-container">
        <QuizQuestion addScore={ addScore } incrementQuestion = {incrementQuestion} question={questions[currQuestion].question} choices={questions[currQuestion].choices} answer={questions[currQuestion].answer} />
        <ProgressBar progressVal={progressValue} changeProgressValue = {changeProgressValue} addScore={ addScore } incrementQuestion = {incrementQuestion}/>
    </div>
    )
}