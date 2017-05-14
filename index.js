const express = require('express')
const parser = require('body-parser').urlencoded({extended: false})
const app = express()

app.listen(3000, () => {
    console.log('server started')
})

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('index')
})