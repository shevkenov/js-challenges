function pullAtIndex(arr, arrOfInx){
    let removed  = []
    const pulled = arr.map((v,i) => !arrOfInx.includes(i) ? removed.push(v) : v).filter((el, i) => arrOfInx.includes(i));
    
    arr.length = 0;
    removed.forEach(v => arr.push(v));
    return pulled;
}



let myArray = ['a', 'b', 'c', 'd'];
let pulled = pullAtIndex(myArray, [1, 3]);

// myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]