const words = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
};

const mult = { hundred: 100, thousand: 1000, million: 1000000 };

function parseInt(str) {
  return str.split(/ |-/).reduce(function(value, word) {
    if (words[word]) value += words[word];
    if (mult[word]) value += mult[word] * (value % mult[word]) - (value % mult[word]);
    return value;
  },0);
}

// 987 654 nine hundred eighty seven tausend six hundred fivty-two
// 87 654 eighty seven tausend six hundred fivty-two
// 7 654 seven tausend six hundred fivty-two
// 654 six hundred fivty-two
// 54 fivty-two
console.log(parseInt('two hundred and ninety-nine'))
console.log(parseInt('two hundred ninety-nine'))
console.log(parseInt('twenty four thousand eight hundred forty-six'))
console.log(parseInt('eighty seven thousand six hundred fifty-two'))
console.log(parseInt('nine hundred eighty seven thousand six hundred fifty-two'))
console.log(parseInt('ninety-four'))
console.log(parseInt('two thousand'))
console.log(parseInt('eight thousand four hundred sixty-five'))
console.log(
  parseInt("one million seven hundred eighty-three thousand nine hundred and nineteen")
);
