// ------------------- fs (File Syetem) -------------------
const fs = require("fs");

// write file synchronous
fs.writeFileSync("./test.txt", "Heloooooooo Welcome Usama Rehman...");

// // read file synchronous
const readTxt = fs.readFileSync("test.txt", "utf-8");
console.log(readTxt)


//----------- readFile() --> use to read the file content Asyncronous
fs.readFile("test.txt", "ascii", (err, data) => {
    if (err) {
        console.log("error =>", err)
        return
    }
    console.log("Test File Data =>", data)
})
// UTF-8 (Unicode Transformation Format - 8 bit) is a character encoding standard that:
// Convert the file’s binary data into readable text using UTF-8 encoding.

// If we remove "utf-8":
// output will be: <Buffer 48 65 6c 6c 6f> (THis is a buffer raw data in binary)


//----------- writeFile() --> Creates a new file OR overwrites existing file
fs.writeFile("example.txt", "Heloo Usama!", (err, data) => {
    if (err) {
        console.log("Error =>", err)
    }
    console.log("Data Write Successfully into example file.")
})


//----------- appendFile()
// Adds data at the end of file
// Difference:
// writeFile → replace content
// appendFile → add content
// If file does not exist → error will occur.

fs.appendFile("example.txt", "\nThis is append file text", (err, data) => {
    if (err) {
        console.log("Error =>", err)
        return
    }
    console.log("Text append successfully")
})


// ------------ unlink() --> Deletes a file
fs.unlink("example.txt", (err) => {
    if (err) {
        console.log("Error=>", err)
    }
    console.log("File deleted successfully")
})

//------------- (Make Direcctory) mkdir() ==> Creates a new folder
fs.mkdir("newFolder", (err) => {
    if (err) {
        console.log("Error =>", err)
    }

    console.log("New Folder successfully created")
})

//------------- nasted folder
fs.mkdir("newFolder/child", (err) => {
    if (err) {
        console.log(Error, "erroe");
    }
    console.log("Nested folder")
})