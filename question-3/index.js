/*
● Create a script that will do the following:
1. Remove Log files
o remove all the files from the Logs directory, if exists
o output the file names to delet
o remove the Logs directory
2. Create Log files
o create a Logs directory, if it does not exist
o change the current process to the new Logs directory
o create 10 log files and write some text into the file
o output the files names to console
o Hint: use the fs module and path module, and the process current working directory to
build directory path. It is acceptable, to have a remove.js script and separate add.js
script.*/

const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'Logs');
if (fs.existsSync(dir)) {
    fs.readdir(dir, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        //listing all files using forEach
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            console.log("deleting files..."+file);
            fs.unlink(path.join(dir, file), err => {
                if (err) throw err;
              }); 
        });
    });
    fs.rmdir(dir,() =>{})
}

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

function getPromise(num){
    return new Promise(function(resolve, reject) {
        fs.writeFile(`File${num}.txt`, `this is log ${num}`, function(err) {
            if (err) reject(err);
            else resolve(`File${num}.txt`);
        });
    });
}

process.chdir(dir);
for(i=0;i<10;i++){
    getPromise(i).then(
        success => console.log(success),
         error => console.log(error)    
    )
}