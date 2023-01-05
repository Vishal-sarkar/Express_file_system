const fs = require('fs');

fs.readFile('./index.txt', (err, data) => {
    if (err) {
        console.log("errrrrroor");
    }
    console.log('Async',data.toString('utf8'));
});

const file = fs.readFileSync('./index.txt');
console.log('sync', file.toString());

// Append 
// fs.appendFile('./index.txt', 'this is co cool!!!', err => {
//     if (err) {
//         console.log(err);
//     }
// })


// Write
// fs.writeFile('bye.txt', 'Sad to see you go', err => {
//     if (err) {
//         console.log(err);
//     }
// })

// Delete
// fs.unlink('./bye.txt', err => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Inception');
// })
