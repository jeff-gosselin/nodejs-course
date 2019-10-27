const fs = require('fs');
const path = require('path');

// Create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder Created...');
// });

// Create and write file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), "Hello World!", err => {
//     if (err) throw err;
//     console.log('File written...');

//     // Inside callback we append to file
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), " I love learning!", err => {
//     if (err) throw err;
//     console.log('File written...');
// });
// });

// Read file
fs.readFile(path.join(__dirname, '/test', "hello.txt"), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

