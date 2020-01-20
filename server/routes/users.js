const express = require('express');
const router = express.Router();
const User = require('../models/User');
const auth = require('../auth/auth');
//create user
//acces public

router.post('/signup', async (req,res)=>{
    const user = new User(req.body)
    try{
        await user.save()
        res.status(201).send(user)
    }

    catch(e){
        res.status(400).send(e)
    }

})


//login user
//access public

router.post('/login',async (req,res)=>{

    const {email, password} = req.body;
    try{
      const user = await User.findByCredentials(email,password);
      const token = await user.generateAuth()
      res.send(token)
    }

    catch(e){
      res.send(e)
    }
 

})

//logout user
//private access

router.post('/logout',auth, async (req,res)=>{
  const user = req.user;
  try{
      req.user.token = ' '
     
      await user.save()
      res.send(req.user.token)
  }
  catch(e){
     res.send(e)
  }

})


module.exports = router;