const debounceInput = document.querySelector('.debounce input');
const debounceP = document.querySelector('.debounce p');
const throttleInput = document.querySelector('.throttle input')
const throttleP = document.querySelector('.throttle p')

const debounceValue = debounce(setValue, 1000);
const throttleValue = throttle(setThrottleValue, 1000)

throttleInput.addEventListener('keyup', (e) => {
    throttleValue(throttleP, e.target.value)
})

debounceInput.addEventListener('keyup', (e) => {
    e.target.value ? debounceValue(debounceP) : debounceP.textContent = 0;
})

function throttle(cb, delay = 250){
    let timer;

    return (...args) => {
        
        if(timer) return;

        cb(...args);
        timer = setTimeout(() => {
            cb(...args);
            timer = undefined;
        }, delay)
    }
}


function debounce(cb, delay = 250){
    let timerId;
    
    return(...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            cb(...args);
        }, delay)
    }
}

function setValue(element){
    element.textContent = parseInt(element.textContent) + 1
}

function setThrottleValue(element, value){
    element.textContent = value
}