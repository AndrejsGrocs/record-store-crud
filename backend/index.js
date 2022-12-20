
import express from "express";
import mysql from "mysql";
import cors from "cors";


const app = express();



const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"records_store"
})

app.use(express.json())
app.use(cors())




// Getting the clg message ib the screen to test that DB is working

app.get("/", (req, res) => {
    res.json("Hello from server");
  });


// Getting data form DB on the screen using the SQL command

app.get("/records", (req, res)=>{
    const q = 'SELECT * FROM records_store.records'
    db.query(q,(err, data)=>{
        if(err)
        return res.json(err)
        return res.json(data)
    })


 })

app.post("/records", (req,res)=>{
    const q = "INSERT INTO records(`artist`,`title`,`label`,`cover`,`genre`,`year`) VALUES (?)";
    const values = [
        //"title","title","title","title","title","title",


        req.body.artist,
        req.body.title,
        req.body.label,
        req.body.cover,
        req.body.genre,
        req.body.year,
]

    db.query(q, [values], (err, data)=>{
        if(err)
        return res.send(err);
        return res.json('Records has been created');
    })
})

app.listen(8800, ()=>{
    console.log('Connected to the backend')
})