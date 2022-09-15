const express = require("express");

const app = new express();
const PORT = process.env.PORT || 3000;

const magic8Responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]

app.get('/', (req, res) => {
  res.send('Hello, robot.')
})

app.get('/:name', (req, res) => {
  res.send(`Hello, ${req.params.name}`)
})

app.get('/tip/:total/:tip', (req, res) => {
  res.send(`
    <div style='display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh;color: white; background-color: black;'>
    <h2 style='text-align: center;'>
    $${(req.params.tip / req.params.total * 100).toFixed(2)}
    </h2>
    </div>
  `);
})

app.get('/magic/:q', (req, res) => {
  let i = Math.floor(Math.random() * magic8Responses.length);
  res.send(`
  <h1>${req.params.q}</h1>
  <h1>${magic8Responses[i]}</h1>
  `);
})

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
})