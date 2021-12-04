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
});

app.get("/raccoons", function(req, res) {
    try {
        let raccoonpic = JSON.stringify(images[randomnum(0, images.length)].url, null, '  ')
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

app.use((req, res, next) => {
    if (req.hostname === 'raccoon.lavalink.eu') {
      return next();
    }
  
    const user = users.find(user => user.domain === req.hostname);
    if (!user) {
      return res.sendStatus(404);
    }
  
    return res.send(`HELLO`);
  });

