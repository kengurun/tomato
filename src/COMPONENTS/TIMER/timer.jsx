import React from 'react';
import s from './timer.module.css';
import tomato from '../../ASSETS/IMAGES/tomato.gif';

let Timer = (props) => {
    // debugger;
    let onChange = (e) => {
        let duration = e.target.value;
        props.updateDuration(duration);
    };
    return (
        <>
            <h1>Tomato timer</h1>
            <span className={s.input}>
                Количество минут: <input type="number" value={props.timerDuration} onChange={onChange} min='0' max='15'/>
            </span>
            <span className={s.button}>
                <button onClick={props.startTimer} disabled={props.isStarted}>Start</button>
            </span>
            <div className={s.result}>Осталось времени: <span id='result'>{props.timeLeft}</span></div>
            <div className={s.tomato}>
                { props.showTomato ? <img src={tomato} /> : null }
            </div>
        </>
    )
};

export default Timer;