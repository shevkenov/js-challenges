function alphanumeric(str) {
    const regex = new RegExp(/([a-zA-Z]|\d)/)
    return str ? str.split("").reduce((acc, cur) => regex.test(cur) ? acc : false, true) : false;
}

function alphanumeric1(str) {
    const regex = new RegExp(/^[a-z\d]+$/i)
    return regex.test(str)
}

console.log(alphanumeric1("Mazinkaiser"))
console.log(alphanumeric1("hello world_"))
console.log(alphanumeric1("PassW0rd"))
console.log(alphanumeric1(""))