const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const file = 'file.txt';
let dataToSend = '';

app.use(express.static('public'));
app.use(express.text());

app.post('/send', (req, res) => {
    console.log(`Testo ricevuto: ${req.body}`);
    fs.appendFile(file, `${req.body}\n`, (err) => {
        if (err) throw err;
        console.log(`The "${req.body}" was appended to file!`);
        fs.readFile(file, (err, data) => {
            if (err) {
                throw err;
            }
            dataToSend = data.toString();
            console.log(`Testo da inviare ${dataToSend}`);
            res.send(dataToSend);
        });
    });
});


app.use((req, res) => {
    res.status(404).send();
});

app.listen(port, () => console.log('Server running'));