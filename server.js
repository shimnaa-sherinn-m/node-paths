// const { log } = require('console')
// var http = require ('http')
// const PORT = 3000
//  http.createServer(function(req,res){
//     res.write("hello node.js")
//     res.end()
//  }).listen(PORT,()=>{
//     console.log(`server running http://localhost:${PORT}`);
    
//  })


// const fs = require('fs')
// const http = require('http')
// try {
//     fs.writeFileSync('demo.txt','hello text from new file')
//     console.log('file created');
    
// }catch (error) {
//     console.log(error);
    
// }
// const server =http.createServer((req,res)=>{
//     fs.readFile('demo.txt',(error,data)=>{
//         if(error){
//             res.writeHead(500,{'content-type':'text/plain'})
//             res.end("error handling file")
//             return
//         }
//         res.writeHead(200,{'content-type':'text-plain'})
//         res.end(data)
//     })
// })
// const port = 3000
// server.listen(port,()=>{
//      console.log(`server running http://localhost:${port}`);
// })

const http = require('http')
const fs = require('fs')
const url = require('url')

const server =  http.createServer((req,res)=>{
    let path = url.parse(req.url)
    console.log(path);


   if (path.pathname=='/') {
    fs.readFile('./index.html',(error,data)=>{
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
    fs.readFile('./contact.html',(error,data)=>{
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
    fs.readFile('./index.css',(error,data)=>{
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
    fs.readFile('./contact.css',(error,data)=>{
        if (error) {
            res.writeHead(404,{'content-type':'text/css'})
            return res.end("page not found")
            
        }
        res.writeHead(200,{'content-type':'text/css'})
        res.write(data)
        res.end()
    })
   }
})
const PORT = 3000
server.listen(PORT,()=>{
    console.log(`server created at http://localhost:${PORT}`);
    
})