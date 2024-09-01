let myLibrary = [];
let count = 0;
const newButton = document.querySelector(".new-book-button");
const booksAreaContainer = document.querySelector(".books-area");
const bookList = document.querySelector(".books-list");

const listBooks = document.createElement("ol");
listBooks.classList.add("listBooks");
bookList.appendChild(listBooks);
booksAreaContainer.appendChild(bookList);
bookList.setAttribute("style","background-color: gray; color: white; font-size: 20px; padding: 8px; margin: 8px;");

newButton.addEventListener("click", addBookToLibrary);

function addBookToLibrary(){
    let inputName = prompt("Digite o nome do livro:");
    let inputAuthor = prompt("Digite o nome do autor:");
    let inputPageNumber = prompt("Digite o número de páginas:");
    let newBook = new Book(inputName,inputAuthor,inputPageNumber);
    myLibrary[count] = newBook;
    count++;
    const content = document.createElement("li");
    content.classList.add("content");
    content.textContent = inputName + ", de " + inputAuthor + ". Possui " + inputPageNumber + " páginas. Lido: ";
    listBooks.appendChild(content);
    const readCheck = document.createElement("input");
    readCheck.classList.add("readCheck");
    readCheck.setAttribute("type", "checkbox");
    content.appendChild(readCheck);
    const removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");
    removeButton.textContent = "Remove";
    content.appendChild(removeButton);
    removeButton.addEventListener("click", () => {
        content.remove();
    });
}

function Book(name,author,numberPages,read){
    this.name = name;
    this.author = author;
    this.numberPages = numberPages;
    this.read = read;
}
