const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event')
    res.end('Hello world')
})

server.listen(5000, () => {
    console.log('Sever listening on port : 5000 ....')
})

//Sever listening on port : 5000
//Loop with press F5
//request event
//request event
//Return condition