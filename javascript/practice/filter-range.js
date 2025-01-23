const filterRangeInPlace = (arr, start, end) => {
    let t = arr.filter((num) => {
        return num >= start && num <= end
    })
    return t
}
arr = [5, 3, 8, 1]
console.log(filterRangeInPlace(arr, 1, 4))