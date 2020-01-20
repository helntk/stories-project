const express  = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('./db');

//routes
const userRouter = require('./routes/users');
const storieRouter = require('./routes/stories');



const port = process.env.PORT || 4000;

app.use(bodyParser.json())
app.use(cors())
app.use(userRouter);
app.use(storieRouter);


app.listen(port, ()=>{
    console.log(`the server is up at ${port} `)
})