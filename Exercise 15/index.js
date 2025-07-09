// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg
// 7. harry.pdf

// this:
// jpg/name.jpg, jpg/cat.jpg
// png/name.png
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

// const fs = require('fs')
// const path = require('path')
// function Filemaker() {
//     fs.writeFile(`${}`, err => {
//         if (err) throw err;
//         console.log("Written File Succesfully")
//     })
// }

import fs from "fs/promises";
import fsn from "fs";
import path from "path";
import e from "express";

const basepath = "C:\\DEV\\MERN Stack course\\Learning-MERN-stack\\Exercise 15";

let files = await fs.readdir(basepath);

for (const item of files) {
    let ext = item.split(".")[item.split(".").length - 1];
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {
        if (fsn.existsSync(path.join(basepath, ext))) {
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
        } else {
            fs.mkdir(ext);
        }
    }
}

Array.forEach(e => {
    
});