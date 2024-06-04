const express = require('express');

const randNum = require('./controllers/randNum');


const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});


app.get('/random-numbers', (req, res) => {
    const numbers = [];
    for (let i = 0; i < 3; i++) {
        const randomNum = randNum.getRandomNumber();
        numbers.push(randomNum);
    }
    console.log(numbers);
    res.json(numbers);
});


