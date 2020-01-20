const express = require('express');
const router = express.Router();
const Storie = require('../models/Storie');
const auth = require('../auth/auth');
const multer = require('multer');
const path = require('path');


const upload = multer();


//create storie
//acess private
router.post('/users/storie',auth,upload.single('file'), async (req,res)=>{
     const url = req.file.buffer;
     console.log(url)
    const storie = new Storie({
        author: req.user._id,
        data: url
    })
    
    try{

    await storie.save();
    res.status(201).send(storie)
    }
    catch(e){
        res.status(400).send(e);
    }

})

router.get('/users/storie/me',auth, async (req,res)=>{
    
    try{
    await Storie.find({author: req.user._id}).populate('stories').exec((err,user)=>{
        res.set('Content-Type', 'image/jpg')
        res.send(user[1].data)
  })


}
 catch(e){
    res.send(e)
 }
  

})


module.exports = router;

