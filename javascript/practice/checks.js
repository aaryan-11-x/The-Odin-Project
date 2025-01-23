const comments = [
    {text: 'Love this!', id: 523423},
    {text: 'Super good!', id: 823423},
    {text: 'You are the best', id: 2039842},
    {text: 'Ramen in my fav food ever', id: 123523},
    {text: 'Nice Nice Nice!', id: 542328}
]

const findId = comments.find(info => info.id == 823423)
console.log(findId)

const index = comments.findIndex(info => info.id == 823423)
console.log(index)
comments.splice(index, 1)
console.log(comments)