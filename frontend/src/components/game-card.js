import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import BasicSelect from './bet-option-select';
import DiceRollResult from './dice-roll-result';

import { useState } from 'react';

import axios from 'axios';


export default function BasicCard() {
    const [amount, setAmount] = useState(5000);
    const [bet, setBet] = useState(0);
    const [disableBet, setDisableBet] = useState(false);
    const [option, setOption] = useState('');
    const [diceRollValue, setDiceRollValue] = useState([0, 0]);
    const [displayDiceRoll, setDisplayDiceRoll] = useState(false);
    const [changedAmount, setChangedAmount] = useState(0);

    const handleBet = (val) => {
        setBet(val);
        setAmount(amount - val);
        setDisableBet(true);
        console.log(process.env.REACT_APP_BACKEND_URI)
    }

    const handleRoll = () => {
        if (option === '') {
            alert('Please select an option');
            return;
        }
        if (bet === 0) {
            alert('Please select a bet amount');
            return;
        }

        console.log('Option:', option);
        console.log('Bet:', bet);
        console.log('Amount:', amount);
        console.log('Get Dice Roll');

        axios.get(`${process.env.REACT_APP_BACKEND_URI}get-dice-roll`, { headers: { 'Access-Control-Allow-Origin': '*' } })
            .then(response => {
                console.log(response.data);
                setDiceRollValue(response.data);
                setDisplayDiceRoll(true);
            })
            .catch(error => {
                console.log(error);
            });

        switch (option) {
            case 'Lucky 7':
                axios.get(`${process.env.REACT_APP_BACKEND_URI}check-choice/luckyNumber`)
                    .then(response => {
                        console.log(response.data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
                break;

            case 'Below 7':
                axios.get(`${process.env.REACT_APP_BACKEND_URI}check-choice/below7`)
                    .then(response => {
                        console.log(response.data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
                break;

            case 'Above 7':
                axios.get(`${process.env.REACT_APP_BACKEND_URI}check-choice/above7`)
                    .then(response => {
                        console.log(response.data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
                break;
            default:
                break;
        }

        axios.post(`${process.env.REACT_APP_BACKEND_URI}update-amount`, {
            amount: amount,
            bet: bet
        })
            .then(response => {
                if (response.data.updatedAmount && response.data.changedAmount) {
                    console.log("Updated Amount:", response.data.updatedAmount);
                    console.log("Changed Amount:",response.data.changedAmount);
                    setAmount(response.data.updatedAmount);
                    setChangedAmount(response.data.changedAmount);
                }
            })
            .catch(error => {
                console.log(error);
            });


    }

    const handlePlayAgain = () => {
        setBet(0);
        setDisableBet(false);
        setOption('');
        setDiceRollValue([0, 0]);
        setDisplayDiceRoll(false);
    }

    return (
        <div id='game-card'>
            <Container maxWidth="sm">

                <Grid container spacing={2} justifyContent="center">

                    <Grid item xs={12} align='center'>
                        <Typography variant='h3' color='textPrimary' gutterBottom>
                            7 Up 7 Down
                        </Typography>
                    </Grid>

                    <Grid item xs={12} align='center'>
                        <Typography variant="h6" component="div" gutterBottom>
                            Amount: {amount}
                        </Typography>
                    </Grid>

                    <Grid item xs={12} align='center'>
                        <Typography color="text.secondary">
                            Choose bet amount:
                        </Typography>
                    </Grid>

                    <Grid item xs={12} align='center'>
                        <ButtonGroup id='bttngrp' variant="contained" color="secondary" aria-label="outlined secondary button group" disabled={disableBet} >
                            <Button onClick={() => handleBet(100)}>100</Button>
                            <Button onClick={() => handleBet(200)}>200</Button>
                            <Button onClick={() => handleBet(500)}>500</Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid item xs={12} align='left'>
                        <Typography variant="h5" gutterBottom sx={{ marginTop: '15px', marginBottom: '15px' }}>
                            Choose Bet Option:
                            <br />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} align='left'>
                        <BasicSelect option={option} setOption={setOption} />
                    </Grid>

                    <Grid item xs={12} align='center'>
                        <DiceRollResult diceRollValue={diceRollValue} displayDiceRoll={displayDiceRoll} changedAmount={changedAmount}/>
                    </Grid>

                    <Grid item xs={12} align='left'>
                        <Button sx={{ margin: '6px' }} type="submit" color='primary' variant='outlined' size="medium" onClick={handleRoll} disabled={displayDiceRoll}>Roll</Button>

                        <Button sx={{ margin: '6px' }} type="submit" color='primary' variant='outlined' size="medium" onClick={handlePlayAgain}>Play Again</Button>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
}
