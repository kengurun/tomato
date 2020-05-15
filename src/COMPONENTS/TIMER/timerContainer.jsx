import React from 'react';
import Timer from "./timer";
import {connect} from 'react-redux';
import {startTimer, updateDuration} from "../../REDUX/timerReducer";
import {msToTimeString} from "./msToTimeString";


class TimerContainer extends React.Component {

    componentDidMount() {
        this.props.updateDuration(this.props.timerDuration)
    }

    render() {
        let timeLeft= this.props.timeLeft * 1000;
        let timeString = msToTimeString(timeLeft);
        return <Timer
            isStarted={this.props.isStarted}
            timeLeft={timeString}
            timerDuration={this.props.timerDuration}
            updateDuration={this.props.updateDuration}
            startTimer={this.startTimer}
            showTomato={this.props.showTomato}
        />
    }

    startTimer = () => {
        let minutes = this.props.timerDuration;
        this.props.startTimer(minutes);
    };

}

let mapStateToProps = (state) => {
    return {
        isStarted: state.timerPage.isStarted,
        timeLeft: state.timerPage.timeLeft,
        timerDuration: state.timerPage.timerDuration,
        showTomato: state.timerPage.showTomato
    }
};

let connected = connect(mapStateToProps, {
        startTimer,
        updateDuration
    }
)(TimerContainer);

export default connected;