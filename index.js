const express = require('express')
const app = express()
const PORT = 3333

app.get('/homer', (req, res) => {
    res.send(`homer`)
})

app.get('/marge', (req, res) => {
    res.send(`marge`)
})

app.get('/bart', (req, res) => {
    res.send(`bart`)
})

app.get('/lisa', (req, res) => {
    res.send(`lisa`)
})

app.get('/maggie', (req, res) => {
    res.send(`maggie`)
})

app.get('/snowball_II', (req, res) => {
    res.send(`snowball_II`)
})

app.get('/santaslittlehelper', (req, res) => {
    res.send(`santas little helper`)
})

app.listen(PORT, () => {
    console.log(`Simpsons: ${PORT} show`)
})