const express = require('express')
const mongoose=require('mongoose')


//commmecting to mongoDB
mongoose.connect('mongodb://localhost/url',{
    userNewUrlParser:false
    , useUnifiedTopology:true
},()=>{
    console.log("yeah connected.........")
})

const app= express();

app.use(express.json())

app.use(express.urlencoded({extended:false}))
//app.use('/',express.static(__dirname+'/public'))
app.set('view engine','ejs')

//Defining routes
app.use('/',require('./routes/index'))
app.use('/api/url',require('./routes/url'))

/*app.get('/',(req,res)=>{
    res.send('index.html')
})*/



app.listen(process.env.PORT||600,()=>{
    console.log("the server started running")
})
