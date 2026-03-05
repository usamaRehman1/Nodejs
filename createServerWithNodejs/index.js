const http = require("http");

const server = http.createServer((req, res) => {
    // res.write("Wrote the text to the server") // write the text no the browser
    // res.end() // very imporyant

    // Why res.end() Is Important ?
    // res.end() does two things:
    // Sends final data to browser
    // Closes the connection

    if (req.url === '/') {
        res.end("Home Page")
    } else if (req.url === 'about') {
        res.write("About Page")
    } else {
        res.write("404 Not Found")
    }

})

server.listen(5000, "127.0.0.1", () => {
    console.log("server is running")
})