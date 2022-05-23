const express = require('express');
const app = express();
const DBconnect = require('./DB/connection');
const dotenv = require('dotenv').config();
const { userRouter, blogRouter } = require('./modules/index.router');
const port = process.env.PORT;
app.use(express.json())
app.use(userRouter, blogRouter)
DBconnect()
app.listen(port, () => {
    console.log("running......");
})