const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db');
const port = 5000;
const path = require('path')

app.use(cors());

var AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);

if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"/frontend/build")))

    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"frontend","build","index.html"))
    })
}else{
    app.get("/",(req,res)=>{
        res.send("api is running")
    })
}


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

