import "spdy";
import "express";

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

spdy.createServer({}, app).listen(5000);