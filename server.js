const app = require('express')()
const http = require('http').createServer(app)

const io = require('socket.io')(http)



var mysql = require('mysql');

var con = mysql.createConnection({

    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "test"
});

app.get('/', (req, res)=>{
    con.connect(function (err) {
        con.query("SELECT * FROM teste", function (err, result, fields) {
            var resultado = result;
            res.render(__dirname+'/index.html', {resultado})
            //res.sendfile(__dirname+'/index.html')
        });
    });
});

http.listen(3000, function(){
    console.log('listening on port 3000')
})

io.on('connection', (socket)=>{
    socket.join('room');
    console.log('new connection', socket.id);
    socket.on('msg',msg=>{
        console.log(msg)
        io.to('room').emit('msg', msg);
    })
})






















