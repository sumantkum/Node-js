
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.post('/login', (req, res)=>{
    const {username, password} = req.body;
    res.send(`Login successful. welcome, ${username}!`);
    
});

app.get('/', (req, res)=>{
    res.sendFile(__dirname+ '/login222.Html');

});

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
});

