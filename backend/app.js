require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

const conn = mysql.createConnection({
    host : process.env.HOST,
    user : process.env.USERS,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
})

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended : true }))


//@ for getting all the queries.

app.get('/good', (req, res) => {
    conn.connect((err) => {
        if(err) throw err;
        console.log("connected");
        conn.query("SELECT * FROM usesr", (error, result) => {
            res.send({
                data : result
            });
        })
    });
})

//@ inserting data

app.post('/send-data', (req, res) => {
    const {name, designation, cname, cemail, cnumber} = req.body;
    let sql = "INSERT INTO usesr(name, designation, cname, cemail, cnumber) values(?,?,?,?,?)";
    conn.query(sql,[name,designation,cname,cemail,cnumber], (error, result) => {
    if(error) throw error;
        // res.send("<script>location.href='http://localhost:3000/'</script>")
        res.redirect("http://localhost:3000/");
    })
});

// const PORT = process.env.PORT || 12001
// const URL= process.env.URL || 'http://localhost'

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.URL}:${process.env.PORT}`);
})