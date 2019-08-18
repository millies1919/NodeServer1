/*
const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
    if (err) {
        console.log('ERROR');
    }
    console.log('Async', data.toString('utf8'));
})

const file = fs.readFileSync('./hello.txt');
console.log('Sync', file.toString());


/* append
fs.appendFile('./hello.txt', ' This is SO cool!', err => {
    if (err) {
        console.log(err);
    }
}) 


 wrtie
fs.writeFile('bye.txt', 'Sad to see you go', err => {
    if (err) {
        console.log(err)
    }
}) 


//delete
fs.unlink('./bye.txt', err => {
    if  (err) {
        console.log(err)
    }    
})

*/