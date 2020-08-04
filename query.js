var mysql = require('mysql');

var con = mysql.createConnection({

    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "test"
});

con.connect(function (err) {
    con.query("SELECT * FROM teste", function (err, result, fields) {
        if (err) throw err;
        var resultado = result;
    });
});
