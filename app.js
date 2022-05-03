const http = require('http');
// const app = require('express');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.write("Server reached");
    res.end()
})
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Shuvo_15:BEDwkRf37O2EIqeD@cluster0.scyfh.mongodb.net/self_projects?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

server.listen(8000, 'localhost', ()=>{
    client.connect(err => {
      const collection = client.db("self_projects").collection("profiler");
      // perform actions on the collection object
      if(err) console.log(err);
    //   console.log("connected");
      client.close();
    });

})



