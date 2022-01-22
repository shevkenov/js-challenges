function deepEqual(obj1, obj2){
    return obj1 && obj2 && typeof obj1 === 'object' && typeof obj2 === 'object' ?
    Object.keys(obj1).length === Object.keys(obj2).length &&
    Object.keys(obj1).reduce((acc, key) => {
        return acc && deepEqual(obj1[key], obj2[key]);
    }, true) : obj1 === obj2
}

console.log(deepEqual('lksfd', null))
console.log(deepEqual({}, {
    'fdga': 'lkajdf'
}))
console.log(deepEqual({
    'fdga': 'lkajdf'
}, {
    'fdga': 'lkajdf'
}))

