const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.text());

app.post('/send', (req, res) => {
    console.log(req.body);
    // res.status(200).send();
    res.send(req.body);
});


app.use((req, res) => {
    res.status(404).send();
});

app.listen(port, () => console.log('Server running'));