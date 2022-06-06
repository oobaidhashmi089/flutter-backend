const express = require ('express' );
const User = require('../models/user');
const bcrypt= require('bcryptjs');

const  authRouter = express.Router();

authRouter.post('/api/signup',async(req,res)=>
{  
try
{
    const {name,email,password}=req.body;
  
    const  existingUser =await User.findOne({email});
    if (existingUser)
    {
        return res.status(400).json({msg:"User with the same email already exists!"})
    }
     const hashedPass=await bcrypt.hash(password,10);
       let user =new User(
           {
               email,
               password:hashedPass,
               name,
           })
    
           user = await user.save();
           res.json(user);
}
catch(e)
{
    res.status(500).json({error:e.message});

}
    //get the data from client
   

//post the data in database 
    // return the from the user


});




module.exports = authRouter;