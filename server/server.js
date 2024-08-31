const express = require('express');
require('dotenv').config();
const app = express();

app.get('/ping',(req,res)=>{
    res.send('pong')
})

const PORT = process.env.PORT | 8080;
app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
})