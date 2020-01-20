const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    token:{
     type: String
    }

})

userSchema.virtual('stories',{
    ref: 'Storie',
    localField: '_id',
    foreignField:'author'
});


userSchema.statics.findByCredentials = async function findByCredentials(email,password){
    const user = await User.findOne({email});

   if(!user){
    return res.status(400).send("there's no user");
   }

   const passwordMatch = await bcrypt.compareSync(password,user.password)

   if(!passwordMatch){
    return res.status(400).send("incorrect passsword");
}

   return user;
}
userSchema.methods.generateAuth = async function generateAuth(){
   let user = this;
   
   const token = jwt.sign({
   payload: {
        id: user._id,
        name: user.name,
        email: user.email
    }
  }, 'secret', 
  { expiresIn: 60 * 60 });
   
  user.token = token;
  user.save();
  return token;
  
}


const User = mongoose.model('User', userSchema);

module.exports = User;