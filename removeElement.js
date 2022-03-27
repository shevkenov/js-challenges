// removeing element from array at certain position without using Array.protorype.splice()
const arr = [1,2,3,4,5];
arr[2] = arr.pop();
console.log(arr)