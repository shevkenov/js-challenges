function binary(decimal) {
  if (decimal === 1) return 1;
  const reminder = decimal % 2;
  decimal = Math.floor(decimal / 2);
  return binary(decimal) + String(reminder);
}

console.log(binary(1)); // "1"
// 1*1 = 1

console.log(binary(5)); // "101"
// 1*1 + 1*4 = 5

console.log(binary(10)); // "1010"
// 1*2 + 1*8 = 10

console.log(binary(72));
