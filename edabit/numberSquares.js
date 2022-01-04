function numberSquares(n) {
    return n > 1 ? (n ** 2) + numberSquares(n - 1) : 1
}

console.log(numberSquares(2)) // 5

console.log(numberSquares(4)) // 30

console.log(numberSquares(5)) // 55