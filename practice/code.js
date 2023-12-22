function mergeArrays(a, b) {
    return [...new Set(a.concat(b))].sort((a, b) => a - b)
}
console.log(mergeArrays([1, 3, 5], [2, 4, 6]))