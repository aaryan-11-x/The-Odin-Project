const copySorted = (arr) => {
    return arr.slice().sort()
}

let arr = ["HTML", "JavaScript", "CSS"]
console.log(arr)
console.log(copySorted(arr))
console.log(arr)
