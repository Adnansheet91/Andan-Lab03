const express = require("express")
const app = express()
const axios = require('axios')

app.use(express.json());
app.set('view engine','ejs')
app.get('/',async function(req,res){

    const response = await axios.post('http://localhost:3000',{data:"O Hi this a test Car River Deer Car Bear and"});
    const result= response.data
    res.render('home',{result});
})

app.listen(5000 || process.env.PORT)