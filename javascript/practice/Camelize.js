const camelize = (statement) => {
    let indexes = [];
    for (letter of statement) {
        if (letter == '-') {
            indexes.push(statement.indexOf(letter))
            statement = statement.replace('-', '')
        }
    }
    for (const index of indexes) {
        capitalize = statement.charAt(index).toUpperCase()
        statement = `${statement.slice(0, index)}${capitalize}${statement.slice(index + 1)}`
    }
    return statement
}

console.log(camelize('-webkit-transition'))