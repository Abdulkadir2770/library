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
    
    // creating a <div> element and appending it into the DOM
    const bookDivTag = document.createElement("div");
    bookDislayGrid.appendChild(bookDivTag);
    bookDivTag.classList.add("book");

    // create the <p>'s and appending it
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    bookDivTag.appendChild(p1);
    bookDivTag.appendChild(p2);
    bookDivTag.appendChild(p3);
    
    p1.innerText = `Title: ${title.value}`;
    p2.innerText = `Author: ${author.value}`;
    p3.innerText = `Num of Pages: ${numOfPages.value}`;
})