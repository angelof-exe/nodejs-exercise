import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";
import fs from "fs"
// const fs = require('fs');

const app = express();
const port = process.env.PORT || 5000;
app.use(express.static('public'));

//registering middlewares
dotenv.config();
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

//registering routes
// app.get("/", (req, res) => {
//     res.status(200).send("Weather API is running");
// });


//fetching weather forecast for a particular city
app.get("/weather", async (req, res) => {
    if (!req.query.city) {
        res.status(404).json("City is missing");
    } else {
        let city = req.query.city;
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`
        );

        const data = await response.json();
        fs.writeFile("meteo_citta.json", JSON.stringify(data), () => { console.log("Salvo il file") })
        res.status(200).json(data);
        res.send(JSON.stringify(data))
    }
    // let cittaJSON = fs.readFileSync("meteo_citta.json", "utf-8");
    // res.send(JSON.stringify(cittaJSON))
});

//creating server
app.listen(port, () => {
    console.log(`server is up on ${port}`);
});
