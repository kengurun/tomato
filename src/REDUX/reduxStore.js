import {applyMiddleware, combineReducers, createStore} from "redux";
import timerReducer from "./timerReducer";
import thunkMiddleWare from 'redux-thunk';
import authReducer from "./authReducer";

let reducers = combineReducers({
        timerPage: timerReducer,
        auth: authReducer
    }
);
let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
window.stor = store;

export default store;