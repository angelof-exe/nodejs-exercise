const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// !!!!IMPORTANTE!!!!
// https://stackoverflow.com/questions/36856232/write-add-data-in-json-file-using-node-js
// https://stackoverflow.com/questions/53054756/javascript-appending-object-to-json-file
// !!!!!!!!!!!!!!!!!!

app.use(express.static('public'));
app.use(express.json());

app.get('/getLibri', (req, res) => {
    let librojson = fs.readFileSync("libreria.json", "utf-8");
    res.send(librojson);
})

app.post('/sendData', (req, res) => {
    console.log(req.body)

    // 1. read and write a .json file
    let librojson = fs.readFileSync("libreria.json", "utf-8");
    // 2. transform a json string into a javascript array
    let libro = JSON.parse(librojson);
    // 3. append an object to an array
    const arr = Array.from(libro);
    arr.push(req.body)
    // 4. transform back the array into a json string
    librojson = JSON.stringify(arr);
    // 5. save the json file
    fs.writeFileSync("libreria.json", librojson, "utf-8");
    res.send(librojson);
})




app.listen(port, () => console.log(`App listening on port ${port}!`))