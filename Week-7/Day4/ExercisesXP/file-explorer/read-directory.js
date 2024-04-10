const fs = require("fs");

function readList() {
    fs.readdir("./", (err, file) => {
        if (err) {
            console.error("Error reading directory:", err);
            return;
        };
        console.log(file);
    });
    
}
readList()