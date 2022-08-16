const title = document.querySelector("#title");
const author = document.querySelector("#author");
const numOfPages = document.querySelector("#numOfPages");
const submitBtn = document.querySelector("#submit-btn");
const bookDislayGrid = document.querySelector(".books-display");

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

    title.value = "Title";
    author.value = "Author";
    numOfPages.value = 0;

      // creating a removal button
      const removeButton = document.createElement("button");
      removeButton.classList.add("remove");
      removeButton.innerText = "Remove";
      bookDivTag.appendChild(removeButton);
      
      removeButton.addEventListener("click", () => {
            if(bookDislayGrid.hasChildNodes()) {
                bookDislayGrid.removeChild(bookDislayGrid.children[0]);
            }
      })

    
})

