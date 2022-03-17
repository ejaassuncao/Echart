const express = require('express');
const app = express();
const port = 8000;
const open = require('open');

app.listen(port, function() { 
    //open(`http://localhost:${port}`);   
    console.log(`server running on: http:localhost:${port}`)
});

//permitir ler os carquivos estaticos
const path = require('path')
app.use('/resources/', express.static(path.join(__dirname, 'resources/')));


//endpoint
app.get("/", (req,res)=> res.sendFile(__dirname+"/index.html"));
app.get("/data", (req,res)=> res.sendFile(__dirname+"/data.json"));
