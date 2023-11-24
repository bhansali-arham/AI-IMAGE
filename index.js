const express=require('express');
const dotenv = require('dotenv');
const port=process.env.PORT || 5000;

dotenv.config();
const app=express();

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/openai',require('./routes/openAIroutes'));


app.listen(port,()=> console.log('Server started on port ' + port ));

