
// const http = require('http')
// const fs = require('fs')
// const url = require('url')
// const queryString = require('querystring')
// const {MongoClient,objectId, ObjectId}=require('mongodb')

// const client = new MongoClient('mongodb://127.0.0.1:27017/')//connected with mongodb


// const server =  http.createServer(async(req,res)=>{
//     const db = client.db('EMPLOYEE')//create database
//     const collection = db.collection('details')//create collection


//     let path = url.parse(req.url)
//     console.log(path);


//    if (path.pathname=='/') {
//     fs.readFile('../frontend/index.html',(error,data)=>{
//     if (error) {
//         res.writeHead(404,{'content-type':'text/html'})
//         return res.end("page not found")
//     }
//      res.writeHead(200,{'content-type':'text/html'})
//      res.write(data)
//      res.end()
//     })
//    }

//    if (path.pathname=='/contact.html') {
//     fs.readFile('../frontend/contact.html',(error,data)=>{
//         if (error) {
//             res.writeHead(404,{'content-type':'text/html'})
//             return res.end("page not found")
            
//         }
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write(data)
//         res.end()
//     })
//    }
    

//     if (path.pathname=='/index.css') {
//     fs.readFile('../frontend/index.css',(error,data)=>{
//         if (error) {
//             res.writeHead(404,{'content-type':'text/css'})
//             return res.end("page not found")
            
//         }
//         res.writeHead(200,{'content-type':'text/css'})
//         res.write(data)
//         res.end()
//     })
//    }


//    if (path.pathname=='/contact.css') {
//     fs.readFile('../frontend/contact.css',(error,data)=>{
//         if (error) {
//             res.writeHead(404,{'content-type':'text/css'})
//             return res.end("page not found")
            
//         }
//         res.writeHead(200,{'content-type':'text/css'})
//         res.write(data)
//         res.end()
//     })
//    }

//      if (path.pathname=='/home.js') {
//     fs.readFile('../frontend/home.js',(error,data)=>{
//         if (error) {
//             res.writeHead(404,{'content-type':'text/js'})
//             return res.end("page not found")
            
//         }
//         res.writeHead(200,{'content-type':'text/js'})
//         res.write(data)
//         res.end()
//     })
//    }

//    if (path.pathname == '/submit' && req.method== 'POST') {
//     let body =''
//     req.on('data',(chunks=>{
//         body+=chunks.toString()
//         console.log(body);
        
//     }))
//     req.on('end',async()=>{
//         const formdata = queryString.parse(body)
//         collection.insertOne(formdata).then(()=>{
//             console.log("success");
            
//         })
//     })

//     res.writeHead(302,{location:'/'})
//     res.end()
//    }

// if(path.pathname == '/geteemployee'&& req.method=='GET'){
//     const data = await collection.find().toArray()

//     const jsondata = JSON.stringify(data)
//     console.log(jsondata);

//     res.writeHead(200,{'content-type':'text/json'})
//     res.end(jsondata)
    
// }

// if (path.pathname == '/update'&& req.method == 'PUT') {
//    let body =''
//    req.on('data',(chunks)=>{
//     body= chunks.toString()
//     console.log(body);
    
//    })  
//    req.on('end',async()=>{
//     let data = JSON.parse(body)
//     let_id = new ObjectId(data.id)

//     let updatedData ={
//         name:data.name,
//         designation:data.designation,
//         salary:data.salary,
//         experience:data.experience
//     }
// await collection.updateOne({_id},{$set:updatedData}).then(()=>{
//     res.writeHead(200,{'content-type':'text/plain'})
//     res.end("success")
// }).catch(()=>{
// res.writeHead(500,{'content-type':'text/plain'})
// res.end("fail")
// })

//    })
// }

// if (path.pathname == '/delete'&& req.method == 'DELETE') {
//    let body =''
//    req.on('data',(chunks)=>{
//     body= chunks.toString()
//     console.log(body);
    
//    }) 
// req.on('end',async()=>{
//     let_id = new ObjectId(body)
//     await collection.deleteOne({_id}).then(()=>{
//         res.writeHead(200,{'content-type':'text/plain'})
//         res.end("success")
//     }).catch(()=>{
//         res.writeHead(500,{'content-type':'text/plain'})
//         res.end('failed')
//     })
// })



// const PORT = 5000
// server.listen(PORT,()=>{
//     console.log(`server created at http://localhost:${PORT}`);
    
// })



const http = require('http')
const fs = require('fs')
const url = require('url')
const queryString = require('querystring')
const { MongoClient, ObjectId } = require('mongodb')

/* MongoDB Connection */
const client = new MongoClient('mongodb://127.0.0.1:27017/')

async function connectDB() {
  await client.connect()
  console.log('MongoDB connected')
}
connectDB()

const server = http.createServer(async (req, res) => {

  const db = client.db('EMPLOYEE')
  const collection = db.collection('details')

  const path = url.parse(req.url, true)
  console.log(path.pathname)

  /* ================= HTML FILES ================= */

  if (path.pathname === '/' && req.method === 'GET') {
    fs.readFile('../frontend/index.html', (err, data) => {
      if (err) {
        res.writeHead(404, { 'content-type': 'text/html' })
        return res.end('Page not found')
      }
      res.writeHead(200, { 'content-type': 'text/html' })
      res.end(data)
    })
    return
  }

  if (path.pathname === '/contact.html' && req.method === 'GET') {
    fs.readFile('../frontend/contact.html', (err, data) => {
      if (err) {
        res.writeHead(404, { 'content-type': 'text/html' })
        return res.end('Page not found')
      }
      res.writeHead(200, { 'content-type': 'text/html' })
      res.end(data)
    })
    return
  }

  /* ================= CSS FILES ================= */

  if (path.pathname === '/index.css') {
    fs.readFile('../frontend/index.css', (err, data) => {
      if (err) {
        res.writeHead(404, { 'content-type': 'text/css' })
        return res.end('Not found')
      }
      res.writeHead(200, { 'content-type': 'text/css' })
      res.end(data)
    })
    return
  }

  if (path.pathname === '/contact.css') {
    fs.readFile('../frontend/contact.css', (err, data) => {
      if (err) {
        res.writeHead(404, { 'content-type': 'text/css' })
        return res.end('Not found')
      }
      res.writeHead(200, { 'content-type': 'text/css' })
      res.end(data)
    })
    return
  }

  /* ================= JS FILE ================= */

  if (path.pathname === '/home.js') {
    fs.readFile('../frontend/home.js', (err, data) => {
      if (err) {
        res.writeHead(404, { 'content-type': 'application/javascript' })
        return res.end('Not found')
      }
      res.writeHead(200, { 'content-type': 'application/javascript' })
      res.end(data)
    })
    return
  }

  /* ================= INSERT DATA ================= */

  if (path.pathname === '/submit' && req.method === 'POST') {
    let body = ''

    req.on('data', (chunk) => {
      body += chunk.toString()
    })

    req.on('end', async () => {
      const formdata = queryString.parse(body)
      await collection.insertOne(formdata)
    })

    res.writeHead(302, { location: '/' })
    res.end()
    return
  }



  if (path.pathname === '/getemployee' && req.method === 'GET') {
    const data = await collection.find().toArray()
    res.writeHead(200, { 'content-type': 'application/json' })
    res.end(JSON.stringify(data))
    return
  }

  

  if (path.pathname === '/update' && req.method === 'PUT') {
    let body = ''

    req.on('data', (chunk) => {
      body += chunk.toString()
    })

    req.on('end', async () => {
      const data = JSON.parse(body)
      const _id = new ObjectId(data.id)

      const updatedData = {
        name: data.name,
        designation: data.designation,
        salary: data.salary,
        experience: data.experience
      }

      try {
        await collection.updateOne({ _id }, { $set: updatedData })
        res.writeHead(200, { 'content-type': 'text/plain' })
        res.end('success')
      } catch (err) {
        res.writeHead(500, { 'content-type': 'text/plain' })
        res.end('fail')
      }
    })
    return
  }


  if (path.pathname === '/delete' && req.method === 'DELETE') {
    let body = ''

    req.on('data', (chunk) => {
      body += chunk.toString()
    })

    req.on('end', async () => {
      const _id = new ObjectId(body)

      try {
        await collection.deleteOne({ _id })
        res.writeHead(200, { 'content-type': 'text/plain' })
        res.end('success')
      } catch (err) {
        res.writeHead(500, { 'content-type': 'text/plain' })
        res.end('failed')
      }
    })
    return
  }



  res.writeHead(404, { 'content-type': 'text/plain' })
  res.end('Route not found')
})

const PORT = 5000
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
