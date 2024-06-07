import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import InstructionsBox from './instructions-box';

function Header() {
    const [showInstructions, setShowInstructions] = useState(false);

    const handleButtonClick = () => {
        setShowInstructions(!showInstructions);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5" component="div">
                    7 Up 7 Down
                </Typography>
                <div style={{ marginLeft: 'auto' }}>
                    <Button color="inherit" style={{ border: '1px solid', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)' }} onClick={handleButtonClick}>
                        How to Play
                    </Button>
                </div>
                {showInstructions && <InstructionsBox showInstructions={showInstructions} setShowInstructions={setShowInstructions}/>}
            </Toolbar>
        </AppBar>
    );
}

export default Header;
