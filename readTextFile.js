const fs = require('fs');

const findWordCount = (data) => {
    const wordsInArray = data.split('/\s+/').filter(item => item !== '');
    return wordsInArray.length;
}

fs.readFile(data.txt, 'utf8', (error, data) => {
    if (error) {
        console.log('An error found while reading the file : ', error);
    } else {
        const totalWords = findWordCount(data);
        console.log('Total word count in the file : ', totalWords);
    }
});