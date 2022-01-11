function anagrams1(word, arr) {
    if(arr.length === 0) return [];
    const firstEl = arr.shift()
    if(twoWordsMatchLetters(word, firstEl)){
        return [firstEl].concat(anagrams(word, arr))
    }else{
        return anagrams(word, arr)
    }
}

function twoWordsMatchLetters(first, second){
    if(first === undefined || second === undefined || first.length !== second.length) return false;
    if(first.length === 0) return true
    let firstArr = first.split('');
    let secondArr = second.split('');
    const firstLetter = firstArr.shift();
    const inxFound = second.indexOf(firstLetter);
    if(inxFound < 0) return false;
    secondArr.splice(inxFound, 1);
    return twoWordsMatchLetters(firstArr.join(''), secondArr.join(''));
 }

function anagrams2(word, words) {
    return words.filter(w => {
        return w.split('').sort().join('') === word.split('').sort().join('');
    })
}

//console.log(twoWordsMatchLetters('rabbac', 'bbaacr'))

console.log(anagrams2('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) // ['aabb', 'bbaa']
console.log(anagrams2('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])) // ['carer', 'racer']
console.log(anagrams2('laser', ['lazing', 'lazy',  'lacer']))