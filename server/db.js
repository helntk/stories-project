const mongoose = require('mongoose');




module.exports = 

mongoose.connect('mongodb://localhost:27017/stories',{ useNewUrlParser: true },(err)=>{
   if(err){
     return console.log('the db couldn"t connect');
   }

   console.log('the db has been connected');
});