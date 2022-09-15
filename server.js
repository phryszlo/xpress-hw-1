const express = require("express");

const app = new express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, robot.')
})

app.get('/:name', (req, res) => {
  res.send(`Hello, ${req.params.name}`)
})

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
})