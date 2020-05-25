import React from 'react';
import TimerWithHooks from "./timerWithHooks";
import {connect} from 'react-redux';
import {startTimer, stopTimer} from "../../REDUX/timerReducer";
import {msToTimeString} from "./msToTimeString";


const TimerContainer = (props) => {
    const stop = () => {
        props.stopTimer(props.timerId);
    };
    let timeLeftMilisec = props.timeLeft * 1000;
    let timeString = msToTimeString(timeLeftMilisec);
    return <TimerWithHooks
        isStarted={props.isStarted}
        timeLeft={timeString}
        timerDuration={props.timerDuration}
        startTimer={props.startTimer}
        showTomato={props.showTomato}
        stop={stop}
    />
};

let mapStateToProps = (state) => {
    return {
        isStarted: state.timerPage.isStarted,
        timeLeft: state.timerPage.timeLeft,
        timerId: state.timerPage.timerId,
        showTomato: state.timerPage.showTomato
    }
};

let connected = connect(mapStateToProps, {
        startTimer,
        stopTimer
    }
)(TimerContainer);

export default connected;