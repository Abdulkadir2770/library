const title = document.querySelector("#title");
const author = document.querySelector("#author");
const numOfPages = document.querySelector("#numOfPages");
const submitBtn = document.querySelector("#submit-btn");
const bookDislayGrid = document.querySelector(".books-display");

// saves all the books of the user
let booksArray = [];

//function that retrieves the user book choice
const bookInfo = () => {

}

// function that displays the users book and saves the information into the booksArray

submitBtn.addEventListener("click", (e) => {
    e.preventDefault;
    
    const book = document.createElement("div");
    bookDislayGrid.appendChild(book);
    book.classList.add("book");
    book.innerText = "It works";

    console.log(title.value);
    console.log(author.value);
    console.log(numOfPages.value);
})