import './ProgressBar.css';
import {useEffect} from 'react';
export default function ProgressBar({incrementQuestion, addScore, changeProgressValue, progressVal}) {

    useEffect(() => {    
         let intervalProgress = setInterval(() => {
            if(progressVal > 0) changeProgressValue();
        }, 100);
        return () => clearInterval(intervalProgress);
    }, []);
    useEffect(() => {
        if (progressVal === 0) {
            addScore('');
            incrementQuestion();
        }
    }, [progressVal]);

    return (
        <progress value={progressVal} min="0" max="100"></progress>
    )
}