const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/start', (req, res) => {
    res.render('start');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/offers', (req, res) => {
    res.render('offers');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
