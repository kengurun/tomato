let SET_TIMER_STATUS = 'SET_TIMER_STATUS';
let SET_TIME_LEFT = 'SET_TIME_LEFT';
let SET_TIMER_DURATION = 'SET_TIMER_DURATION';
let SET_SHOW_TOMATO = 'SET_SHOW_TOMATO';
let SET_TIMER_ID = 'SET_TIMER_ID';

let initialState = {
    isStarted: false,
    timeLeft: 0,
    timerDuration: 1,
    timerId: null,
    showTomato: false
};

let timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TIME_LEFT: {
            return {
                ...state,
                timeLeft: action.time
            }
        }
        case SET_TIMER_DURATION: {
            return {
                ...state,
                timerDuration: action.duration
            }
        }
        case SET_SHOW_TOMATO: {
            return {
                ...state,
                showTomato: action.show
            }
        }
        case SET_TIMER_STATUS:
            return {
                ...state,
                isStarted: action.isStarted
            };
        case SET_TIMER_ID:
            return {
                ...state,
                timerId: action.id
            };

        default:
            return state;
    }
};


export const setTimeLeft = (time) => ({type: SET_TIME_LEFT, time: time});
export const setTimerStatus = (isStarted) => ({type: SET_TIMER_STATUS, isStarted: isStarted});
export const setTimerDuration = (duration) => ({type: SET_TIMER_DURATION, duration: duration});
export const setTimerId = (id) => ({type: SET_TIMER_ID, id: id});
export const setShowTomato = (show) => ({type: SET_SHOW_TOMATO, show: show});

export const updateDuration = (duration) => {
    return (dispatch) => {
        dispatch(setTimerDuration(duration));
        dispatch(setTimeLeft(duration * 60));
        dispatch(setShowTomato(false));
    }
};

export const startTimer = (minutes) => {
    return (dispatch) => {
        let count = minutes * 60; // переводим минуты в секунды
        dispatch(setTimerStatus(true));
        dispatch(setTimeLeft(count));
        console.log('Timer started from ' + count + ' seconds');

        let timerId = setInterval(() => {
            console.log('TimerID=' + timerId);
            count = count - 1;
            if (count <= 0) {
                stopTimer(timerId)
            } else {
                dispatch(setTimeLeft(count));
                // console.log(count);
            }
        }, 1000);
        dispatch(setTimerId(timerId));
    };
};

export const stopTimer = (timerId) => {
    return (dispatch) => {
        // debugger
        clearInterval(timerId);
        dispatch(setTimerStatus(false));
        dispatch(setTimeLeft(0));
        dispatch(setShowTomato(true));
        console.log('Timer stopped.');
    }
}

export default timerReducer;

