import spdy from "spdy";
import express from "express";
import fs from "fs";

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

spdy.createServer({
    key: fs.readFileSync('/etc/letsencrypt/live/www.example.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/www.example.com/fullchain.pem')
}, app).listen(5000);