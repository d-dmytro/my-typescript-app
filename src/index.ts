import express from 'express';

const port = parseInt(process.env.PORT, 10) || 3000;
const app = express();

app.set('view engine', 'ejs');

app.get('/', (_req, res) => {
  res.render('index', {
    greeting: 'Hello World!'
  });
});

app.listen(port, (err: Error) => {
  if (err) throw err;
  console.log(`Ready on port ${port}`);
});
