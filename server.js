const express = require("express");

const app = new express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, robot.')
})

app.get('/:name', (req, res) => {
  res.send(`Hello, ${req.params.name}`)
})

app.get('/tip/:total/:tip', (req, res) => {
  res.send(`$${(req.params.tip / req.params.total * 100).toFixed(2)}`);
})

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
})