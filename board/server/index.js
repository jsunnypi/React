const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const PORT = process.env.port || 8000;

const bodyParser = require("body-parser");

let corsOptions = {
    origin: "*",
    credential: true,
};

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use(cors(corsOptions));

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "bbs",
});


// app.get("/", (req, res)=> {
//     const sqlQuery = "insert into requested (rowno) values (1)";
//     db.query(sqlQuery, (err, result)=>{
//         res.send("success!");
//     });
// });

app.get("/list", (req, res)=> {
    
    const sqlQuery = "select BOARD_ID, BOARD_TITLE, REGISTER_ID, DATE_FORMAT(REGISTER_DATE, '%Y-%m-%d %H:%i') AS REGISTER_DATE, DATE_FORMAT(UPDATER_DATE, '%Y-%m-%d %H:%i') AS UPDATER_DATE FROM BOARD;";
    db.query(sqlQuery, (err, result)=>{
        res.send(result);
    });
});

app.post("/insert", (req, res)=> {
    var title = req.body.title;
    var content = req.body.content;

    const sqlQuery =
    "insert into BOARD(BOARD_TITLE, BOARD_CONTENT, REGISTER_ID) values(?, ?, 'artistJay');";
    db.query(sqlQuery, [title, content], (err, result)=>{
        res.send(result);
    });
});

app.post("/update", (req, res)=>{
    var title = req.body.title;
    var content = req.body.content;
    var id = req.body.id;

    const sqlQuery = 
    "UPDATE BOARD SET BOARD_TITLE = ?, BOARD_CONTENT = ?, UPDATER_DATE=now() WHERE BOARD_ID = ?;";
    db.query(sqlQuery, [title, content, id], (err, result)=>{
        res.send(result);
    });
});

app.post("/delete", (req, res)=> {
    const id = req.body.boardIdList;

    const sqlQuery = `DELETE FROM BOARD WHERE BOARD_ID IN (${id})`;
    db.query(sqlQuery, (err, result)=> {
        res.send(result);
    });
});


app.listen(PORT, ()=> {
    console.log(`running on port ${PORT}`);
});