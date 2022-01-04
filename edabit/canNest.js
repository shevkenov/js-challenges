function canNest(arr1, arr2) {
    return Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2) ? true : false;
}

console.log(canNest([1, 2, 3, 4], [0, 6])) // true

console.log(canNest([3, 1], [4, 0])) // true

console.log(canNest([9, 9, 8], [8, 9]) )// false

console.log(canNest([1, 2, 3, 4], [2, 3]) )// false