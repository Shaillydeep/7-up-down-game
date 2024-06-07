import React from 'react';

const styles = {
    root: {
        position: 'fixed',
        bottom: '16px',
        right: '16px',
        color: 'white',
        backgroundColor: 'black',
        padding: '8px',
        borderRadius: '8px',
    },
    link: {
        textDecoration: 'none',
        marginLeft: '0', // Update marginLeft to '0' to align the link to the left
        fontWeight: 'bold', // Add fontWeight property to highlight the link
    },
};

const Name = () => {
    return (
        <div style={styles.root}>
            <span>By Shailly Deep</span>
            <br />
            <span>
                <a href="https://github.com/Shaillydeep/7-up-down-game" style={styles.link}>
                    GitHub
                </a>
            </span>
        </div>
    );
};

export default Name;
