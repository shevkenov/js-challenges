function bitwiseAND(a, b) {
  const aBit = a.toString(2).split("").reverse();
  const bBit = b.toString(2).split("").reverse();

  return parseInt(
    aBit
      .map((n, i) => (Number(n) + Number(bBit[i]) === 2 ? "1" : 0))
      .reverse()
      .join(""),
    2
  );
}

function bitwiseOR(a, b) {
  const aBit = a.toString(2).split("").reverse();
  const bBit = b.toString(2).split("").reverse();

  const biggerArray = aBit.length >= bBit.length ? aBit : bBit;
  const smallerArray = aBit.length >= bBit.length ? bBit : aBit;

  return parseInt(
    biggerArray.map((n,i) => Number(n) === 1 || Number(smallerArray[i]) === 1 ? '1' : 0).reverse().join(""),
    2
  );
}

console.log(bitwiseAND(7, 12));
console.log(bitwiseOR(5, 3));
