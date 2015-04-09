# Slack bot seed server

Written in Node.js using [expressjs](http://expressjs.com/).

## Features

* `/ping` responds `OK`
* `/echo` echoes what you send

## Deploy

### Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/ArnaudRinquin/slack-bot)

### Other

Just run `npm i && npm start`. Server will listen on port `8000` or `PORT` env variable if set.
