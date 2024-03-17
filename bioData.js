const fs = require("fs");

const bioData = {
    name: "Sumant",
    Roll: 12,
    Reg: 12204358,
    Address: "Patna"
};
const jsonData = JSON.stringify(bioData);
fs.writeFile('json1.json', jsonData, (err) => {
    if (err) {
        console.log("there is error");
    } else {
        console.log('it is done');
    }
});
fs.readFile('json1.json', 'utf-8', (err, data) => {
    if (err) {
        console.log("there is error");
    } else {
        console.log("it is Done");
    }
});
