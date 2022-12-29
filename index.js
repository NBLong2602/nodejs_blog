const path = require('path');
const express = require('express');
const morgan = require('morgan');
const port = 3000;
const { engine }= require ('express-handlebars');
const app = express();

app.use(express.static(path.join(__dirname,'public')));
//HTTP Logger
app.use(morgan('combined'));
//Template Engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resource/views'));

app.get('/', (req, res) => {
  res.render('home');
})
app.get('/tin-tuc', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})