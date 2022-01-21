function updateInventory(arr1, arr2) {
    const newArr = [...arr2];
    const updatedArr = arr1.map(item => {
        const inx = newArr.findIndex(i => i[1] === item[1]);
        if(inx >= 0){
            item = updateData(item, newArr[inx]);
            newArr.splice(inx, 1);
        }

        return item
    })

    return [...updatedArr, ...newArr].sort((a,b) => a[1].localeCompare(b[1]));
}

function updateData(oldData, newData){
    return [oldData[0] + newData[0], newData[1]]
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

curInv = updateInventory(curInv, newInv);
console.log(curInv);