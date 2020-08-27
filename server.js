const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.listen(port, () => {
  console.log(`Portfolio website listening at http://localhost:${port}`)
})