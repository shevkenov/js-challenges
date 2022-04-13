import { qs, qsa, createElement, addGlobalEvenetListener, sleep, randumNumberBetween, memoize } from './domUtils.js';

const div = qs('div');
const p = qs('p', div);
const divS = qsa('div');
const promise = sleep(3000);
const fib = memoize(fibunacci);

function fibunacci(n){
    if(n <= 2) return n - 1;

    return fib(n-2) + fib(n-1);
}

const button = createElement('button', {class: 'btn', value: 'Click me'});
addGlobalEvenetListener('click', button, () => console.log('clicked'))

promise.then(() => console.log('Promise executed'))
console.log(button)
console.log(div);
console.log(p);
console.log(divS);
console.log(randumNumberBetween(5,9));
console.log('Fibonacci is ' + fibunacci(18))
