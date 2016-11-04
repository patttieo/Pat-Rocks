
const express = require('express'),
      exphbs = require('express-handlebars'),
      app = express();

app.use(express.static(__dirname));

app.engine('.hbs', exphbs({extname: '.hbs', partialsDir: 'templates'}));
app.set('view engine', '.hbs');
app.set('views', `${__dirname}/templates`);

app.get('/', (req, res) => {
  res.render('index', {layout: false});
});

app.get('*.html', (req, res) => {
  res.render(req.path.slice(1).replace('.html', ''), {});
});

app.listen(9999);
