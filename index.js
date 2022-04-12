import spdy from "spdy";
import express from "express";
import fs from "fs";

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

spdy.createServer({
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.crt')
}, app).listen(5000);