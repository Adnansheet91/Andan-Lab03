const express = require('express')
const app = express();
app.use(express.json());
const frequencyCounter = require('./extractFrequency');

app.get('/',async function(req,res){
    res.send("hello world");
})

app.post('/',async function(req,res){
    const body= req.body;
    const data= body.data;
    const result= await frequencyCounter(data);
    res.send(result)
})

app.listen(3000 || process.env.PORT);