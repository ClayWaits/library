const addBookForm = document.getElementById("addBookForm")
let bookTitle = document.getElementById("bookTitleInput");
let author = document.getElementById("authorInput");
let pages = document.getElementById("pageInput");
let read = document.getElementById("readCheck")

addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newBook = getBookFromInput()
    if (bookTitle.value == "" || author.value == "" || pages.value == "" || read.value == "") {
        alert("Please fill out the entire form before submitting your book!")
    } else if (isNaN(pages.value)) {
        alert("Number of pages must be a number value")
    } else {
        console.log(`Submitted! This form has a title of ${bookTitle.value} author is ${author.value} page number is ${pages.value} and the read value is ${read.checked}`)
    }
});

function getBookFromInput() {
    const title = document.getElementById('bookTitleInput').value
    const author = document.getElementById('authorInput').value
    const pages = document.getElementById('pagesInput').value
    const isRead = document.getElementById("readCheck").checked
    return new Book(title, author, pages, isRead)
}

function toggleRead() {

}

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
    addBookForm.reset();
  }

const library = new Library()

let myLibrary = [];

function Book() {

}

function addBookToLibrary() {
    
}


//Button selectors
//TODO:

//Add placeholder books
//Add responsive cards
//Make it look pretty
//Add function to add books
//Define book function
//Make it functional

