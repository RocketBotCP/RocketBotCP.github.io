const express = require('express');

const router = express.Router();

const CLIENT_ID = "373805131432722433"
const CLIENT_SECRET = "WBeJEYDKAZAo2Gy-Y6kw2U9EYi-wQ6QO"
const redirect = encodeURIComponent('http://rocketbotcp.github.io/premium/373805131432722433/api/discord/callback');

router.get('/login', (req, res) => {
  res.redirect(`https://discordapp.com/oauth2/authorize?client_id=${CLIENT_ID}&scope=identify&response_type=code&redirect_uri=${redirect}`);
});

module.exports = router;