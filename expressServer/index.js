// What is Express.js?
// Express.js is a lightweight framework for Node.js that helps you build web servers and APIs easily.

// Without Express you use the Node.js HTTP module, which requires more code. Express simplifies
//  routing, middleware, and request handling.

// Routing: Routing means handling different URLs.
// Types of routes:

// GET  ==> GET is used to retrieve (fetch) data from the server.
// POST ==> POST is used to send data to the server to create something new
// PUT ==> POST is used to send data to the server to create something new
// DELETE ==> 

// Request Object (req)
// The request object contains all information sent by the client (browser or API request) to the server.

// Response Object (res)
// The response object is used to send data back to the client.

// Route Parameters
// Route parameters are dynamic values inside the URL.

// Query Parameters
// Query parameters are extra information added to the URL after ?.

// A CRUD API is an API that allows you to Create, Read, Update, and Delete data.
// These four operations are the basic actions used in almost every backend system built with Express.js and Node.js.

const express = require("express")
const app = express();

// Middleweare to read JSON data
app.use(express.json())

let users = []

// ---  GET ALL USER --
app.get("/users", (req, res) => {
    res.json({
        status: true,
        message: "Get all users",
        users: users
    })
})


// --- ADD SINGLE USER --
app.post("/users", (req, res) => {
    const newUser = req.body;
    users.push(newUser)

    res.json({
        status: true,
        message: "user add successfully",
        users: users
    })
})


// --- GET SINGLE USER DATA ---
app.get("/users/:name", (req, res) => {
    const { name } = req.params
    res.json({
        status: true,
        message: "Single User Data",
        user: users.find(user => user.name === name)
    })
})


//--- UPDATE USER ---
app.put("/users/:name", (req, res) => {
    // console.log(req.params)
    const { name } = req.params
    res.json({
        status: true,
        message: "Update User Successfully",
        users: users.map(user => {
            if (user.name == name) {
                return req.body
            }
            return user
        })
    })
})


// --- DELETE USER ---
app.delete("/users/:name", (req, res) => {
    const { name } = req.params
    res.json({
        status: true,
        message: "User Deleted Successfully",
        users: users.filter(user => user.name !== name)
    })
})


// server url listener
app.listen(5000, () => {
    console.log("server running on the port of 5000")
})
