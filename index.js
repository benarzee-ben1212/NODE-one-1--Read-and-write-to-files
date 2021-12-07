const fs = require('fs');
const textIn=fs.readFileSync('input.txt', 'utf-8');
console.log(textIn)

const textOut=`What we know about superheroes : ${textIn} \n created on ${Date.now()}`;
fs.writeFileSync('./output/output.txt' , textOut);
console.log(textOut);
console.log('file written with changes');