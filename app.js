// const http = require('http');
const express = require('express');
const app = express();
// const server = http.createServer((req,res)=>{
//     res.setHeader('Content-Type','text/plain');
//     res.write("Server reached");
//     res.end()
// })
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Shuvo_15:BEDwkRf37O2EIqeD@cluster0.scyfh.mongodb.net/self_projects?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.set('view engine','ejs');
app.use("/styles", express.static(__dirname + '/views/styles'));
app.use("/assets",express.static(__dirname+'/views/assets'));
app.listen(8000, (error)=>{
    if(error) throw error;
    console.log("connection successful!!!");
    client.connect(err => {
      const collection = client.db("self_projects").collection("profiler");
      // perform actions on the collection object
      if(err) console.log(err);
    //   console.log("connected");
      client.close();
    });

})

app.get('/', (req,res) => {
    // res.sendFile('./views/index.html', {root: __dirname});
    res.render('index');
})



