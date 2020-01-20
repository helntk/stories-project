const mongoose = require('mongoose');


const storieSchema = mongoose.Schema({
    data: {
        type: Buffer        
    }
    ,
    author:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    }

},
{timeStamp: true})


const Storie = mongoose.model('Storie', storieSchema);

module.exports = Storie;