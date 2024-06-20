const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/get_data', (req, res) => {
    res.send('Hello World!');
});

app.get('/', (req, res) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.status(500).send('Error loading index.html');
        } else {
            res.send(data.toString());
        }
    });
});

app.use((req, res) => {
    res.status(404).send();
});

app.listen(port, () => console.log('Server running'));