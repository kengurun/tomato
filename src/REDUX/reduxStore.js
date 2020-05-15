import {applyMiddleware, combineReducers, createStore} from "redux";
import timerReducer from "./timerReducer";
import thunkMiddleWare from 'redux-thunk';

let reducers = combineReducers({
        timerPage: timerReducer
    }
);
let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
window.stor = store;

export default store;