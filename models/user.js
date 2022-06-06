const mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    email: { type: String, unique: true,required:true,trim:true,validate:{validator:(value)=>{var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    return value.match(emailRegex);
} , message:"Please Enter a valid email address"
} },
    
    password: {type:String,required:true},
    address:{type:String,default:''},
    type:{type:String,default:'user'},

    //cart
  });



  const tokenSchema = new mongoose.Schema({
    _userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    token: { type: String, required: true },
    expireAt: { type: Date, default: Date.now, index: { expires: 86400000 } }
});


const User = mongoose.model('User',userSchema);

  module.exports = User;