import React, {useState, useEffect} from 'react';
import s from './timer.module.css';
import tomato from '../../ASSETS/IMAGES/tomato.gif';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';

let TimerWithHooks = (props) => {
    const durations = [
        {
            value: 0.1,
            label: '6 сек'
        },
        {
            value: 1,
            label: '1 мин'
        },
        {
            value: 15,
            label: '15 мин'
        }
    ];

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        content: {
            display: 'flex',
            height: '100%'
        },
        fixedHeight: {
            height: 240,
            width: 240
        },
        paper: {
            padding: theme.spacing(2),
            // textAlign: 'center',
            // display: 'flex',
            // flexDirection: 'column',
            // alignItems: 'center',
            // justifyContent: 'space-evenly'

        },
        container: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
        }
    }));

    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    let [timerDuration, setTimerDuration] = useState(0.1);
    // useEffect(() => {
    //     console.log('useEffect');
    // }, [timerDuration]);
    let onChange = (e) => {
        setTimerDuration(e.target.value);
    };
    let startTimer = () => {
        props.startTimer(timerDuration);
    };
    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <Grid container
                      spacing={0}
                      align="center" // выравнивает дочерние элементы внутри элемента сетки
                      justify="center" // выравнивает вдоль главной оси (column) за счет распределения своб места
                      alignContent="center" // выравнивает вдолб поперечной оси (горизонтально)
                      direction="column"
                >
                    <Grid item>
                        <Paper className={classes.paper}>
                            <Grid container direction="column" spacing={3}>
                                <Grid item>
                                    <div className={s.input}>
                                        <TextField
                                            // InputProps={{
                                            //     endAdornment: <InputAdornment position="end">минут</InputAdornment>,
                                            // }}
                                            // label="Duration"
                                            helperText="Задайте длительность"
                                            variant="outlined"
                                            type="number"
                                            value={timerDuration}
                                            onChange={onChange}
                                            inputProps={{"min": 0.1, "max": 15}}
                                            select
                                        >
                                            {
                                                durations.map((option) => (
                                                <MenuItem value={option.value}>
                                                {option.label}
                                                </MenuItem>
                                                ))
                                            }
                                        </TextField>
                                    </div>
                                </Grid>
                                <Grid item>
                                    {
                                        props.isStarted
                                            ?
                                            <Button color="secondary" variant="contained"
                                                    onClick={props.stop}>Stop</Button>
                                            :
                                            <Button color="primary" variant="contained"
                                                    onClick={startTimer}>Start</Button>
                                    }
                                </Grid>
                                <Grid item>
                                    <div className={s.result}>Осталось времени: <span
                                        id='result'>{props.timeLeft}</span>
                                    </div>
                                </Grid>
                                {props.showTomato &&
                                <Grid item>
                                    <div className={s.tomato}>
                                        <img src={tomato}/>
                                    </div>
                                </Grid>
                                }
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
};

export default TimerWithHooks;