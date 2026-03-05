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




app.listen(5000, () => {
    console.log("server running on the port of 5000")
})
