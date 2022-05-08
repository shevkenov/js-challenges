// https://www.codewars.com/kata/51b66044bce5799a7f000003/train/javascript

const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

class RomanNumerals {
  static toRoman(num) {
    let result = "";

    for (const key in map) {
      const count = parseInt(num / map[key]);

      if (count) {
        result += key.repeat(count);
      }

      num %= map[key];

      if(num.length === 0) return 0
    }

    return result;
  }

  static fromRoman(num) {  
    // let result = 0;

    // for (let i = 0; i < num.length; i++) {
    //   const coumple = num.slice(i, i + 2);
    //   const letter = num[i];

    //   if (map[coumple]) {
    //     result += map[coumple];
    //     i++;
    //   } else {
    //     result += map[letter];
    //   }
    // }

    // return result;
    const regex = /CM|CD|XC|XL|IX|IV|\w/g;

    return num.match(regex).reduce((acc,cur) => acc += map[cur],0)
  }
}

console.log(RomanNumerals.toRoman(2349));
console.log(RomanNumerals.toRoman(2439));
console.log(RomanNumerals.toRoman(1666));
console.log(RomanNumerals.toRoman(1990));
console.log(RomanNumerals.toRoman(2008));
console.log(RomanNumerals.fromRoman("MMCDXXXIX"));
console.log(RomanNumerals.fromRoman("MMCCCXLIX"));
console.log(RomanNumerals.fromRoman("MDCLXVI"));
console.log(RomanNumerals.fromRoman("MCMXC"));
console.log(RomanNumerals.fromRoman("MMVIII"));

