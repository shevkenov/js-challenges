function first(arr, n = 1){
    if(n === 1) return arr[0];
    return arr.filter((_, i) => i < n);
}

function last(arr, n = 1){
    if(n === 1) return arr[arr.length - 1];
    return arr.slice(n, arr.length)
}

function sample(arr){
    return arr[Math.floor(Math.random() * (arr.length - 0 + 1))]
}

function pluck(arr, key){
    return arr.map(el => el[key])
}

function groupBy(arr, key){
    return arr.reduce((acc, cur) => {
        const value = cur[key]
        return {...acc, [value]: [...(acc[value] ?? []), cur]}
    },{})
}

const array = ['a','b','d','s','e','w'];
const array1= [{name: 'Andrey', age: 48}, {name: 'Ema', age: 18}, {name: 'Raia', age: 18}, {name: 'Elena', age: 48}, {name: 'Dido', age: 38}] // {name: ['Andrew', 'Ema'], age: [18, 28]}

console.log(first(array,3));
console.log(last(array,3));
console.log(sample(array));
console.log(groupBy(array1, 'age'));
console.log(pluck(array1, 'name'));