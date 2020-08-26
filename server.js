const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})