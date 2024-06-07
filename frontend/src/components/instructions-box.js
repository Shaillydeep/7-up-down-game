import React from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, Button } from '@mui/material';

const InstructionsBox = ({ showInstructions, setShowInstructions }) => {
    const handleClose = () => {
        setShowInstructions(false);
    };

    return (
        <Dialog open={showInstructions} maxWidth="sm" fullWidth>
            <DialogTitle>Instructions</DialogTitle>
            <Button onClick={handleClose} style={{ position: 'absolute', top: '5%', right: '5%' }}>Close</Button>
            <DialogContent>
                <Typography variant="body1" component="div">
                    <ol>
                        <li>Choose a bet amount and an option.</li>
                        <li>Click roll to roll dice.</li>
                        <li>If your guess is correct on Lucky 7 you will get 5 times your bet, otherwise winning gets you double your bet.</li>
                        <li>Click Play Again to play another round.</li>
                    </ol>
                </Typography>
            </DialogContent>
        </Dialog>
    );
};

export default InstructionsBox;
