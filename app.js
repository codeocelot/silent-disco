const options = require('./conf');
const encoder = require('./encoder');
const app = require('express')();

app.get('/stream.mp3', (req, res) => {
  res.set({
    'Content-Type': 'audio/mpeg3',
    'Transfer-Encoding': 'chunked'
  });
  encoder.pipe(res);
});

app.get('/listen', (req, res) => {
  res.render('listen');
});

const server = app.listen(options.port);

app.set('views', './views');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

console.log('listing to', options.port);
