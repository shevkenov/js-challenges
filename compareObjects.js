function deepEqual(obj1, obj2){
    return obj1 && obj2 && typeof obj1 === 'object' && typeof obj2 === 'object' ?
    Object.keys(obj1).length === Object.keys(obj2).length &&
    Object.keys(obj1).reduce((acc, key) => {
        return acc && deepEqual(obj1[key], obj2[key]);
    }, true) : obj1 === obj2
}

// console.log(deepEqual('lksfd', null))
// console.log(deepEqual({}, {
//     'fdga': 'lkajdf'
// }))
// console.log(deepEqual({
//     'fdga': 'lkajdf'
// }, {
//     'fdga': 'lkajdf'
// }))

function shallowComparison(objA, objB){
    
    //check primitive var types
    if(Object.is(objA, objB)){
        return true;
    }

    if(typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null){
        return false
    }

    const objAkeys = Object.keys(objA);
    const objBkeys = Object.keys(objB);

    if(objAkeys.length !== Object.length){
        return false
    }

    for (let i = 0; i < objAkeys.length; i++) {
        const currentKey = objAkeys[i]
        if(objB.hasOwnProperty(currentKey) && Object.is(objA[currentKey], objB[currentKey])){
            return true
        }
    }

    return false
}

console.log(shallowComparison({'null':null}, {'null':null}));