const fs = require('fs')

//Writes .txt file containing created array. Includes the length, min, and max in the file name.
function arrayTextFileGenerator(length = 100, max = 10, min = 0) {
    fs.writeFile(`testArrayLength${length}Min${min}Max${max}`, '[' + arrayGenerator(length, max, min) + ']', () => {
        console.log("File created in current directory!")
    });
}

//Generates array of defined length filled with random integers.
function arrayGenerator(length = 100, max = 10, min = 0) {
    return Array.from({ length: length }, () => getRandomInt(min, max))
}

//Computes random integers between min(inclusive) and max(inclusive).
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
    createTxtFile: arrayTextFileGenerator,
    create: arrayGenerator
}

