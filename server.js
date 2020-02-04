const express = require('express')
const app = express()
const str = require('./dist/bundle')

// TEMPERORY SERVER just to see some output.. This will not be part of the library obviously

app.all("*", (req, res) => res.status(200).send(str.default))

app.listen(3000, () => console.log("App listening on port 3000"))