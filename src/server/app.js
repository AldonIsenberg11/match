const express = require('express')
const app = express()
const port = 8081
const colors = require('colors')

const db = require('./services/shared-db.js')

db.connect()

app.get('/', (req, res) => res.send('HelloWorld!'))

app.listen(port, () => console.log (`Example app listening on port ${port}`.cyan.bgBlue))
