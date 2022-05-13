const express = require("express");
const app = express();
const path = require('path');
const port = 8080;
const cors = require("cors");

app.use(express.urlencoded( {extended: true} ));
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/home", async (req,res) => {
    res.send("this stuff kind works");
});

app.post("/post_name", async (req,res) => {
    let { name } = req.body;
    console.log(name);
});


app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});