import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';

import BasicSelect from './bet-option-select';

import { useState } from 'react';



export default function BasicCard() {
    const [amount, setAmount] = useState(5000);
    const [bet, setBet] = useState(0);
    const [disableBet, setDisableBet] = useState(false);
    const [option, setOption] = useState('');

    const handleBet = (val) => {
        setBet(val);
        setAmount(amount - val);
        setDisableBet(true);
    }

    const handleRoll = () => {
        console.log('Option:', option);
        console.log('Bet:', bet);
        console.log('Amount:', amount);
        console.log('Get Dice Roll');
    }

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant='h3' color='textPrimary' gutterBottom>
                    7 Up 7 Down
                </Typography>
                <Typography variant="h6" component="div">
                    Amount: {amount}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Choose bet:
                </Typography>
                <ButtonGroup id='bttngrp' variant="contained" color="secondary" aria-label="outlined secondary button group" disabled={disableBet} >
                    <Button onClick={() => handleBet(100)}>100</Button>
                    <Button onClick={() => handleBet(200)}>200</Button>
                    <Button onClick={() => handleBet(500)}>500</Button>
                </ButtonGroup>
                <br />
                <Typography variant="body2" align='left' gutterBottom sx={{ marginTop: '15px' , marginBottom: '15px'}}>
                    Choose Bet Option:
                    <br />
                </Typography>
                <BasicSelect option={option} setOption= {setOption} />
            </CardContent>
            <CardActions>
                <Button type="submit" color='primary' variant='outlined' size="medium" onClick={handleRoll}>Roll</Button>
            </CardActions>
        </Card>
    );
}
