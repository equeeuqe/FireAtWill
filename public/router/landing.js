const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();


router.get("/",(req,res)=>{
    res.send("<h1>hello<h1>")
})

module.exports= router;