import React from 'react';
import s from './timer.module.css';
import tomato from '../../ASSETS/IMAGES/tomato.gif';
import Button from '@material-ui/core/Button';

let Timer = (props) => {
    // debugger;
    let onChange = (e) => {
        let duration = e.target.value;
        props.updateDuration(duration);
    };
    return (
        <>
            <div className={s.input}>
                <p>Количество минут:</p>
                <input type="number"
                       value={props.timerDuration}
                       onChange={onChange} min='0' max='15'/>
                <p></p>
            </div>
            {
                props.isStarted
                    ? <Button color="primary" variant="contained" onClick={props.stop}>Stop</Button>
                    : <Button color="primary" variant="contained" onClick={props.startTimer}>Start</Button>
            }

            {/*<button onClick={props.startTimer} disabled={props.isStarted}>Start</button>*/}

            <div className={s.result}>Осталось времени: <span id='result'>{props.timeLeft}</span></div>
            <div className={s.tomato}>
                {props.showTomato ? <img src={tomato}/> : null}
            </div>
        </>
    )
};

export default Timer;