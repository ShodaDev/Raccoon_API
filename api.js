const express = require("express");
const app = new express();
const config = {
    port: "80"
}
const images = require("./imgs.json");
const colors = require("colors");
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 50 
});

app.use(limiter);

app.get("/", function(req, res) {
    res.send("Hello and welcome to the APIs made by the lavalink.eu team! Go to <a href='http://raccoon.lavalink.eu/raccoons'>http://raccoon.lavalink.eu/raccoons</a> to get the url of a random raccoon picture!")
});

app.get("/raccoons", function(req, res) {
    try {
        let raccoonpic = JSON.stringify(images[randomnum(0, images.length)], null, ' ')
        const date = new Date();
        console.log(`${date.getHours()}:${(date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}:${(date.getSeconds() < 10 ? '0' : '') + date.getSeconds()} \n`.green + raccoonpic);
        res.send(raccoonpic);
    }
    catch(e) {
        console.log(`${e}`.red)
        res.send("There is an error...")
    }
});

app.listen(config.port, () => console.log(`Server listening on port ${config.port}`))

function randomnum (firstnum, secondnum) {
    return Math.round(Math.random() * (secondnum - firstnum) + firstnum);
}
function randomnum (firstnum, secondnum) {
    return Math.round(Math.random() * (secondnum - firstnum) + firstnum);
}
app.use((req, res, next) => {
    if (req.hostname === 'YOURDOMAIN.COM') {
      return next();
    }  
    return res.send(`HELLO`);
});

