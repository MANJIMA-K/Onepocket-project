const express = require('express');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

// server that responds with "Hello, World!" for all incoming HTTP requests
app.use((req, res, next) => {
    res.send('Hello, World!');
});

// server that listens on port 3000
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

// function that takes an array of integers as input and returns the sum of all the numbers.
let sum = 0;
const arraySum = (array) => {
    return array.reduce((acc, curr) => acc + curr, 0);
};

array = [1,2,3,4,5]
sum = arraySum(array);
console.log('sum of integers in the array : ', sum);

//script that reads a text file named "data.txt" and counts the number of words in it
const fs = require('fs');

const fileName = 'data.txt';

fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.log('An error found while reading the file : ', error);
    } else {
        const wordsInArray = data.split(' ').filter(item => item.trim() !== '');
        console.log('Total word count in the file : ', wordsInArray.length);
    }
});