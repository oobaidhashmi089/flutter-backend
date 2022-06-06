
const express = require ('express' );
const mongoose = require('mongoose');

const authRouter =require('./routes/auth')

const PORT =process.env.PORT || 5000;
const app =express();
const DB ="mongodb+srv://obaid1:obaid1@cluster0.tdlem.mongodb.net/?retryWrites=true&w=majority";
 //middleware
 
app.use(express.json());
app.use(authRouter);



//connections
mongoose.connect(DB).then(()=>
{
    console.log('connection Successfully')
}).catch((e)=>{console.log(e)});


app.get('/', (req, res) => {
     
    res.send('hello world')
 
    });



app. listen (PORT , "0.0.0.0" , ()=>
{
    console.log(`connect at port ${PORT}`);
});
