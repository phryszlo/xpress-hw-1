// F(n) = F(n-1) + F(n-2)

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

  if (fibbos.indexOf(max) >= 0) { return true; }
  else { return false; }

  console.log(fibbos.join(','));
}

isThisAFibbo(50)
