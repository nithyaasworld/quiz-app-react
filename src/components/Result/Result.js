import { useLocation } from 'react-router-dom';
import './Result.css';
export default function Result(props) {
    const location = useLocation();
    console.log(location.state.allScores)
    let questions = [
        ["Who is current PM of India", 'Narendra Modi'],
        ["What is capital of Orissa", 'Bhubaneshwar'],
        ["In the context to India's wild life, the flying fox is a ____?", 'Bat'],
        ["What percentage of land area should remain covered by forest to maintain Ecological balance", '33%'],
        ["The pureset form of iron is", 'Wrought iron']];
    
    let totalScore = 0;
    for (let i = 0; i < questions.length; i++){
        if (questions[i][1] === location.state.allScores[i]) {
            totalScore += 10;
        }
    }
    return (
        <div className="total-score-container">
            <p>Total Score: <span className="total-score">{totalScore}</span> </p>
            <div className="row">
                <p>Who is current PM of India?</p>
                <p>Narendra Modi</p>
                <p className={`answer ${location.state.allScores[0] === "Narendra Modi" ? 'success' : 'fail'}`}>{location.state.allScores[0]}</p>
            </div>
            <div className="row">
                <p>What is capital of Orissa</p>
                <p>Bhubaneshwar</p>
                <p className={`answer ${location.state.allScores[1] === "Bhubaneshwar" ? 'success' : 'fail'}`}>{location.state.allScores[1]}</p>
            </div>
            <div className="row">
                <p>In the context to India's wild life, the flying fox is a ____?</p>
                <p>Bat</p>
                <p className={`answer ${location.state.allScores[2] === "Bat" ? 'success' : 'fail'}`}>{location.state.allScores[2]}</p>
            </div>
            <div className="row">
                <p>What percentage of land area should remain covered by forest to maintain Ecological balance</p>
                <p>33%</p>
                <p className={`answer ${location.state.allScores[3] === "33%" ? 'success' : 'fail'}`}>{location.state.allScores[3]}</p>
            </div>
            <div className="row">
                <p>The pureset form of iron is</p>
                <p>Wrought iron</p>
                <p className={`answer ${location.state.allScores[4] === "Wrought iron" ? 'success' : 'fail'}`}>{location.state.allScores[4]}</p>
            </div>
        </div>
    )
}