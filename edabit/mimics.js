function shiftToLeft(x, y) {
    return x * 2 ** y;
}

console.log(shiftToLeft(5, 2)) // 20

console.log(shiftToLeft(10, 3)) // 80

console.log(shiftToLeft(-32, 2)) // -128

console.log(shiftToLeft(-6, 5)) // -192

console.log(shiftToLeft(12, 4)) // 192

console.log(shiftToLeft(46, 6)) // 2944