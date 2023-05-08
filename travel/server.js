const http = require('http')
const myUrl = require('./module/myUrl')
http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        return
    }
    res.writeHead(200, {
        'Content-Type': 'application/json;charset=utf8',
        'access-control-allow-origin': '*'
    })

    myUrl.myUrl(req,res)

}).listen(3000, () => {
    console.log('http://localhost:3000');
})
