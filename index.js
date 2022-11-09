const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const userRoutes = require("./product");
app.use(bodyparser.json());
app.use(userRoutes);
app.get('/',(req,res)=>{
    return res.json('start with /movies');
})
app.listen(3000,()=>{
    console.log('server has been started at port 3000');
})