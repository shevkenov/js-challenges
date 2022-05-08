// https://www.codewars.com/kata/51e056fe544cf36c410000fb/solutions/javascript

function topThreeWords(str){
    if(!str.length) return [];

    const regex = /[^a-zA-Z0-9_(\w'\w)]/gm
    return str.split(regex).filter(w => w.length).reduce((acc, cur) => {
        const isFound = acc.find(w => w.word === cur.toLowerCase());
        
        if(!isFound){
            const regexAps = /'+/gm;
            if(regexAps.test(cur)) {
                const foo = cur.match(regexAps)
                if(cur.match(regexAps)[0].length === cur.length){
                    return acc
                }
            };
            const newWord = {
                word: cur.toLowerCase(),
                count: 1
            }
            return [...acc, newWord]
        }else{
            isFound.count += 1;
            return acc
        }

    },[]).sort((a,b) => b.count - a.count).map(w => w.word).slice(0,3)

}

console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"))
console.log(topThreeWords("  //wont won't won't"))
console.log(topThreeWords("In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income."))
console.log(topThreeWords("'/''"))