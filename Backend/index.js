const express = require('express')
const calculate = require('./utils/physicalCalc.js')
const app = express()
const port = 3000

app.get('/calculate', (req, res) => {
  res.send(calculate())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})