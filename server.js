const fs = require('fs');


const question1 = () => {
fs.readFile('./input.txt', (err, data) => {
    console.time('santa-time')
    const input = data.toString('utf8');
    const inputArray = input.split('');
    const answer = inputArray.reduce((acc, currentValue) => {
        if (currentValue === "("){
            return acc += 1
        } else if (currentValue === ")"){
            return acc -= 1
        }
    }, 0)
    console.log('floor: ', answer)
    console.timeEnd('santa-time')
  })
}

question1();

