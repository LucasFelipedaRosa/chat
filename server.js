const app = require('express')()
const http = require('http').createServer(app)

const io = require('socket.io')(http)

app.get('/', (req, res)=>{
    res.sendfile(__dirname+'/index.html')
})

http.listen(3000, function(){
    console.log('listening on port 3000')
})

io.on('connection', (socket)=>{
    console.log('new connection', socket.id)
    socket.on('msg',msg=>{
        console.log(msg)
        socket.broadcast.emit('msg', msg);
    })
})






















