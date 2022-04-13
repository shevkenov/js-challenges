function squareOfnum(){
    const resultArr = [];
    
    return (n) => {

        if(resultArr[n]) return resultArr[n];
        let result = 0
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                result += 1
            }
        }
        resultArr[n] = result
        return result;
    }
}

let square = squareOfnum();
console.log(square(30000));
console.log(square(50000));
console.log(square(30000));
console.log(square(50000));


