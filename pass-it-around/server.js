const express = require("express");

const app = new express();
const PORT = process.env.PORT || 5000;

let b = 99;
app.get('/', (req, res) => {
  b = 99;
  res.send(`
  <h3>${b} bottles of beer on the wall.</h3>
  <a href='${b-1}'><h4>take one down, pass it around</h4></a>
  `)
})

app.get('/:n', (req, res) => {
  b = req.params.n;
  if (b > 0) {
  res.send(`
  <h3>${b} bottles of beer on the wall.</h3>
  <a href='${b-1}'><h4>take one down, pass it around</h4></a>
  `)
  }
  else {
    res.send(`
    <div style='display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh;color: white; background-color: black;'>
    <h3>😒Beer gone.😒</h3>
    <a href='/'><h4>click to start over</h4></a>
    </div>

    `)
  }
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})