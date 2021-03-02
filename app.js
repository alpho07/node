const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("This is AWS ELB and Nodejs Width Codepipeline integrated")
});

const port = process.env.port || 3000;
app.listen(port,()=>{
    console.log('Application');
});

