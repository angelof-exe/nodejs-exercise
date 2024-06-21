import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";
import fs from "fs"
// const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

//registering middlewares
dotenv.config();
app.use(express.static('public'));
app.use(express.text());
app.use(express.json());
app.use(cors());


//fetching weather forecast for a particular city
app.post('/weather', async (req, res) => {
    const apiKey = '6fe5c98ccde73d7a7b4c3fa6a79f6a2a'; // Replace with your actual API key
    // const city = req.query.city; // Assuming you're passing a city as a query parameter
    const city = req.body['citta']
    console.log("Testo ricevuto")
    console.log(req.body['citta'])
    // const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        console.log("SDONO NEL TRY")
        const response = await fetch(url);
        const data = await response.json();
        res.send(data); // Send the weather data to the client
    } catch (error) {
        console.log("SONO NEL CATCH")
        console.error('Error fetching weather data:', error);
        res.status(500).send({});
    }
});

//creating server
app.listen(port, () => {
    console.log(`server is up on ${port}`);
});
