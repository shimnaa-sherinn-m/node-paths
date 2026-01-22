
const http = require('http')
const fs = require('fs')
const url = require('url')
const queryString = require('querystring')
const {MongoClient,objectId}=require('mongodb')

const client = new MongoClient('mongodb://127.0.0.1:27017/')//connected with mongodb


const server =  http.createServer((req,res)=>{
    const db = client.db('EMPLOYEE')//create database
    const collection = db.collection('details')//create collection


    let path = url.parse(req.url)
    console.log(path);


   if (path.pathname=='/') {
    fs.readFile('../frontend/index.html',(error,data)=>{
    if (error) {
        res.writeHead(404,{'content-type':'text/html'})
        return res.end("page not found")
    }
     res.writeHead(200,{'content-type':'text/html'})
     res.write(data)
     res.end()
    })
   }

   if (path.pathname=='/contact.html') {
    fs.readFile('../frontend/contact.html',(error,data)=>{
        if (error) {
            res.writeHead(404,{'content-type':'text/html'})
            return res.end("page not found")
            
        }
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data)
        res.end()
    })
   }
    

    if (path.pathname=='/index.css') {
    fs.readFile('../frontend/index.css',(error,data)=>{
        if (error) {
            res.writeHead(404,{'content-type':'text/css'})
            return res.end("page not found")
            
        }
        res.writeHead(200,{'content-type':'text/css'})
        res.write(data)
        res.end()
    })
   }


   if (path.pathname=='/contact.css') {
    fs.readFile('../frontend/contact.css',(error,data)=>{
        if (error) {
            res.writeHead(404,{'content-type':'text/css'})
            return res.end("page not found")
            
        }
        res.writeHead(200,{'content-type':'text/css'})
        res.write(data)
        res.end()
    })
   }

   if (path.pathname == '/submit' && req.method== 'POST') {
    let body =''
    req.on('data',(chunks=>{
        body+=chunks.toString()
        console.log(body);
        
    }))
    req.on('end',async()=>{
        const formdata = queryString.parse(body)
        collection.insertOne(formdata).then(()=>{
            console.log("success");
            
        })
    })

    res.writeHead(302,{location:'/'})
    res.end()
   }

})
const PORT = 5000
server.listen(PORT,()=>{
    console.log(`server created at http://localhost:${PORT}`);
    
})