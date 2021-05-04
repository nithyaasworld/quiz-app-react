import './ProgressBar.css';
import {useEffect, useState} from 'react';
export default function ProgressBar() {
    let [progressValue, setProgressValue] = useState(100);
    useEffect(() => {
        setInterval(() => setProgressValue( (prevProgressValue) => prevProgressValue - 1), 100);
     }, []);
    return (
        <progress value={progressValue} min="0" max="100"></progress>
    )
}