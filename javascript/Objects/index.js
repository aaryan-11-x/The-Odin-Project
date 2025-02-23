function books(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

const book1 = new books('The Alchemist', 'Paulo Coelho', 208, true)
const book2 = new books('The Subtle Art of Not Giving a F*ck', 'Mark Manson', 320, false)

console.log(book1.title, book1.author)
console.log(typeof book1)

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

Player.prototype.sayName = function () {
    console.log(this.name);
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');

console.log(Player.prototype)
console.log(Object.getPrototypeOf(player1))

Object.getPrototypeOf(player1) === Player.prototype; // returns true
Object.getPrototypeOf(player2) === Player.prototype; // returns true
player1.sayName();
