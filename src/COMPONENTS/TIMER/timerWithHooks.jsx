import React, {useState} from 'react';
import s from './timer.module.css';
import tomato from '../../ASSETS/IMAGES/tomato.gif';
import Button from '@material-ui/core/Button';

let TimerWithHooks = (props) => {
    // debugger;
    let [timerDuration, setTimerDuration] = useState(1);
    let onChange = (e) => {
        setTimerDuration(e.target.value);
    };
    let startTimer = () => {
        props.startTimer(timerDuration);
    };
    return (
        <>
            <div className={s.input}>
                <p>Количество минут:</p>
                <input type="number"
                       value={timerDuration}
                       onChange={onChange} min='0.1' max='15'/>
                <p> </p>
            </div>
            {
                props.isStarted
                    ? <Button color="secondary" variant="contained" onClick={props.stop}>Stop</Button>
                    : <Button color="primary" variant="contained" onClick={startTimer}>Start</Button>
            }
            <div className={s.result}>Осталось времени: <span id='result'>{props.timeLeft}</span></div>
            <div className={s.tomato}>
                {props.showTomato ? <img src={tomato}/> : null}
            </div>
        </>
    )
};

export default TimerWithHooks;