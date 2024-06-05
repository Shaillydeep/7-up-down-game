import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";


export default function DiceRollResult({ diceRollValue, displayDiceRoll }) {
    return (
        <div>
            {displayDiceRoll && (
                <div id="dice-roll" style={ { alignContent:'center'}}>
                    <Typography variant="h5">Dice Roll Result</Typography>
                    <List >
                        <ListItem alignItems="flex-start">
                            <Typography variant="h6">{diceRollValue[0]}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="h6">{diceRollValue[1]}</Typography>
                        </ListItem>
                    </List>
                </div>
            )}
        </div>
    );
}
