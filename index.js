let arr = [1, 2, 3, 4, -5, 34, -67, 99, -10, 76]

// Addition of array elements
function addArray(arr) {
    const ans = arr.reduce((acc, curr) => acc + curr, 0)
    return ans
}
// console.log(addArray(arr))

// Subtraction of array elements
function subArray(arr) {
    const ans = arr.reduce((acc, curr) => acc - curr, 0)
    return ans
}

// Multiplication of array elements
function mulArray(arr) {
    const ans = arr.reduce((acc, curr) => acc * curr, 1)
    return ans
}

// Division of array elements   
function divArray(arr) {
    const ans = arr.reduce((acc, curr) => acc / curr, 1)
    return ans
}

// Maximum of array elements
function maxArr(arr) {
    const ans = Math.max(...arr)
    return ans
}
// console.log(maxArr(arr))

// Minimum of array elements
function minArr(arr) {
    const ans = Math.min(...arr)
    return ans
}

// Even numbers among array elements
function evenArr(arr) {
    const ans = arr.filter((x) => x % 2 == 0)
    return ans
}

// Odd numbers among array elements
function oddArr(arr) {
    const ans = arr.filter((x) => x % 2 != 0)
    return ans
}

// Find negative numbers
function negArr(arr) {
    const ans = arr.filter((x) => x < 0)
    return ans
}

// Sort array in ascending order
function sortArr(arr) {
    const ans = arr.sort((a, b) => a - b)
    return ans
}
// console.log(sortArr(arr))

// Sort array in descending order
function sortArrDesc(arr) {
    const ans = arr.sort((a, b) => b - a)
    return ans
}

modules.exports = {
    addArray,
    subArray,
    mulArray,
    divArray,
    maxArr,
    minArr,
    evenArr,
    oddArr,
    negArr,
    sortArr,
    sortArrDesc
}