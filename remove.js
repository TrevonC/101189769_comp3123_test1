//Name: Trevon Costa
//Student #: 101189769
const fs = require('fs');
const path = require('path');

if(fs.existsSync("Logs")) {
    fs.readdir("Logs", (e, files) => {
        if (e) throw e;
        for (const file of files) {
            const filepath = path.join("Logs", file);
            fs.unlink(filepath, e => {
                if (e) throw e;
            });
            console.log(`delete files...${file}`);
        }
        fs.rmdirSync("Logs");
    });
}