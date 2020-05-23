import React from 'react';
import './App.css';
import TimerContainer from '../src/COMPONENTS/TIMER/timerContainer';
import CssBaseline from '@material-ui/core/CssBaseline';
import HeaderContainer from "./COMPONENTS/HEADER/headerContainer";

function App() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <div className="App">
                {/*<header className="App-header">*/}
                {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                {/*</header>*/}
                <HeaderContainer/>
                <TimerContainer/>
            </div>
        </React.Fragment>
    );
}

export default App;
