function sym(args) {
  const arrs = [...arguments];

  if (arrs.length === 2) {
    return symTwoArrays(...arrs);
  } else {
    return sym(symTwoArrays(arrs[0], arrs[1]), ...arrs.slice(2));
  }
}

function symTwoArrays(arr1, arr2) {
  let modifiedArr = [...new Set(arr2)];
  return [...new Set(arr1)].reduce((acc, cur, i, arr) => {
    const inx = modifiedArr.indexOf(cur);
    if (inx >= 0) {
      modifiedArr = [
        ...modifiedArr.slice(0, inx),
        ...modifiedArr.slice(inx + 1),
      ];
    } else {
      acc.push(cur);
    }

    if (i === arr.length - 1) {
      acc = [...acc, ...modifiedArr];
    }

    return acc;
  }, []).sort((a,b) => a-b);
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 3], [5, 2, 1, 4, 5]));
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));
