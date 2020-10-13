import express from 'express';

// * Happy app
const app = express();

app.get('/', (req, res) => {
  res.json({message: 'Oi'})
  console.log('Hello, world!!')
});

app.listen(3333);
