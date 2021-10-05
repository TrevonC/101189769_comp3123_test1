//Name: Trevon Costa
//Student #: 101189769
const fs = require('fs');

if(!fs.existsSync("Logs")) {
    fs.mkdirSync("Logs");
}

process.chdir("Logs");

for(let a = 0; a < 10; a++) {
    const fName = `log${a}.txt`;
    fs.writeFile(fName, 'lab test 1', (e) => {
        if (e) {
            throw e;
        }
    });
    console.log(fName);
}
