const express = require('express')
const app = express()
const str = require('./dist/bundle')

app.get("/", (req, res) => res.status(301).redirect("/amp"))
app.get("/amp", (req, res) => res.status(200).send(str.default))
app.use((req, res) => res.status(404).send("404 Not Found"))

app.listen(3000, () => console.log("App listening on port 3000"))