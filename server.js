const express = require("express");

const app = new express();
const PORT = process.env.PORT || 3000;

const magic8Responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]


// ROOT ROUTE
app.get('/', (req, res) => {
  res.send('Hello, robot.')
})

app.get('/:name', (req, res) => {
  res.send(`Hello, ${req.params.name}`)
})


// TIP CALCULATOR ROUTE
app.get('/tip/:total/:tip', (req, res) => {
  res.send(`
    
    <h2>
    $${(req.params.tip / req.params.total * 100).toFixed(2)}
    </h2>
  `);
})

// MAGIC 8-BALL ROUTE
app.get('/magic/:q', (req, res) => {
  let i = Math.floor(Math.random() * magic8Responses.length);
  res.send(`
  <h1>${req.params.q}</h1>
  <h1>${magic8Responses[i]}</h1>
  `);
})

// FIBONACCI SECTION

// F(n) = F(n-1) + F(n-2)

// Fibonacci calculations
const isThisAFibbo = (max) => {
  const fibbos = [0, 1];
  let n = 1;
  let nMinus2 = 0;
  let nMinus1 = 0;

  while (n <= max) {

    nMinus2 = nMinus1;
    nMinus1 = n;
    n = nMinus1 + nMinus2;
    fibbos.push(n);
  }

  if (fibbos.indexOf(parseInt(max)) >= 0) { return true; }
  else { return false; }
}

const theFibbosUpToYourNum = (max) => {
  const fibbos = [0, 1];
  let n = 1;
  let nMinus2 = 0;
  let nMinus1 = 0;

  while (n <= max) {

    nMinus2 = nMinus1;
    nMinus1 = n;
    n = nMinus1 + nMinus2;
    fibbos.push(n);
  }

  return fibbos.join(',');
}

// THE FIBONACCI ROUTE
app.get('/fibonacci/:num', (req, res) => {
  if (isThisAFibbo(req.params.num)) {
    res.send(`
    <h3 style='text-align: center; margin: auto;'>Very good. ${req.params.num} is a Fibbo.</h3>
    `);
  }
  else {
    res.send(`
    <h3 style='text-align: center; margin: auto;'>I can tell ${req.params.num} is not a Fibbo.</h3>
    <h4 style='text-align: center; margin: auto;'>The fibbos up to (and right past) your number are: ${theFibbosUpToYourNum(req.params.num)}</h4>
    
    `);

  }
})


// START THE SERVER
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
})