function whichIsLarger(f, g) {
    return f() === g() ? 'neither' : f() > g() ? 'f' : 'g'
}

console.log(whichIsLarger(() => 5, () => 10)) // "g"

console.log(whichIsLarger(() => 25,  () => 25)) // "neither"

console.log(whichIsLarger(() => 505050, () => 5050)) // "f"