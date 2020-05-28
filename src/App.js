import React from 'react';
import './App.css';
import TimerContainer from '../src/COMPONENTS/TIMER/timerContainer';
import CssBaseline from '@material-ui/core/CssBaseline';
import HeaderContainer from "./COMPONENTS/HEADER/headerContainer";
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TemporaryDrawer from "./COMPONENTS/DRAWER/Drawer";


function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = React.useMemo(() =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );
    const [drawerState, setDrawerState] = React.useState(
        false
    );
    const handleDrawerOpen = () => {
        setDrawerState(true)
    };
    const handleDrawerClose = () => {
        setDrawerState(false)
    };
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <div className="App">
                    <CssBaseline/>
                    <HeaderContainer handleDrawerOpen={handleDrawerOpen}/>
                    <TemporaryDrawer
                        handleDrawerClose={handleDrawerClose}
                        drawerState={drawerState}
                    />
                    <TimerContainer/>
                </div>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;
