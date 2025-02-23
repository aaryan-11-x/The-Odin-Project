const myLibrary = [];

// Book Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Toggle Read Status
Book.prototype.toggleReadStatus = function () {
    this.read = !this.read;
};

// Add Book to Library
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

// Display Books
function displayBooks() {
    const libraryContainer = document.getElementById("library-container");
    libraryContainer.innerHTML = ""; // Clear the container

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Status: ${book.read ? "Read" : "Not Read"}</p>
      <button onclick="toggleReadStatus(${index})">Toggle Read Status</button>
      <button onclick="removeBook(${index})">Remove</button>
    `;
        libraryContainer.appendChild(bookCard);
    });
}

// Toggle Read Status for a Book
function toggleReadStatus(index) {
    myLibrary[index].toggleReadStatus();
    displayBooks();
}

// Remove a Book
function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

// Form Submission
document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;
    addBookToLibrary(title, author, pages, read);
    document.getElementById("form").reset(); // Clear the form
    document.getElementById("book-form").classList.add("hidden"); // Hide the form
});

// Show/Hide Form
document.getElementById("new-book-btn").addEventListener("click", () => {
    document.getElementById("book-form").classList.toggle("hidden");
});

// Manually add some books for testing
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("1984", "George Orwell", 328, false);