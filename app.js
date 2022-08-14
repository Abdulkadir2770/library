const title = document.querySelector("#title").nodeValue;
const author = document.querySelector("#author");
const numOfPages = document.querySelector("#numOfPages");
const submitBtn = document.querySelector("#submit-btn");
const bookDislayGrid = document.querySelector(".books-display");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault;
    console.log(title.nodeValue);
    console.log(author.nodeValue);
    console.log(numOfPages.nodeValue);
})