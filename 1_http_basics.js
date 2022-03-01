const http = require('http')
const {readFileSync} = require('fs')
//get all files
const homePage = readFileSync('./index.html')
const server = http.createServer((req, res) => {
    //console.log(req.method)
    const url = req.url
    //home page
    if(url === '/'){        
        res.writeHead(200, {'content-type':'text/plain'})
        res.write(homePage)
        res.end()
    }
    //about page
    if(url === '/about'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>about page<h1>')
        res.end()
    }
    //error page
    else{
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>error page<h1>')
        res.end()
    }
})
server.listen(5000)