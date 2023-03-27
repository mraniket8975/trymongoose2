const express = require('express')
const mongoose = require('mongoose')
const app = express()

let params = {
    useNewUrlParser : true,
    useUnifiedTopology : true
}
mongoose.connect('mongodb+srv://aniket123:dyL0u7eGwuthc6J8@cluster0.7gys0dg.mongodb.net/meet?retryWrites=true&w=majority' , params)

let db = mongoose.connection;

let userschema = mongoose.Schema({
    name : String,
    email : String
})

let usermodel = new mongoose.model('users' , userschema)

app.get('/' , async(req  , resp) => {
    
    resp.send({"name" : "hello user"})
})


app.post('/name' , async(req  , resp) => {
    let result = await usermodel.find({})
    resp.send(result)
})

app.post('/email' ,async (req  , resp) => {
     let result = await usermodel.find({})
    resp.send(result)
})

app.listen(1111 , () => console.log('server started at port'))