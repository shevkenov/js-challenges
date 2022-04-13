function fib(n, fibArr = []){
    if(n <= 2) return 1;

    if(fibArr[n]){
        return fibArr[n];
    }else{
        const result = fib(n - 1, fibArr) + fib(n - 2, fibArr);
        fibArr[n] = result;
        return result;
    }
}

console.log(fib(5))