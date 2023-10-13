let myLibrary = JSON.parse(localStorage.getItem("books")) || [];

// constructor
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  get info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  }
}

// Funcionalidad
const formContainer = document.querySelector("#form-container");
const form = document.querySelector("#form");
const booksContainer = document.querySelector(".books-container");
const btnOpenForm = document.querySelector("#open-form");

function addBookToLibrary(e) {
  e.preventDefault(); //el envio del formulario actualizara la pagina
  const title = this.querySelector("[id=input-title]").value;
  const author = this.querySelector("[id=input-author]").value;
  const pages = this.querySelector("[id=input-pages]").value;
  const read = this.querySelector("[id=input-read-yes]").checked;

  const book = new Book(title, author, pages, read);

  myLibrary.push(book);
  this.reset();
  localStorage.setItem("books", JSON.stringify(myLibrary));
  loopAndDisplay(myLibrary, booksContainer);
}

function loopAndDisplay(books = [], bookList) {
  bookList.innerHTML = books
    .map((book, i) => {
      return `
        <div class="book">
            <h3 class="title">Titulo</h3>
            <p class="book-name">${book.title}</p>
                
            <h3 class="title"> Author<h3/>
            <p class="author">${book.author}</p>
            
            
            <h3 class="title">Pages<h3/>
            <p class="pages">${book.pages}</p>
            

            <div ="read-box">
                <input type="checkbox" data-index="${i}" id="item${i}" ${
        book.read ? "checked" : ""
      }>
                <label for="item${i}">Read: ${book.read ? "Yes" : "No"}</label>
            </div>

            <div class="book-buttons">
                <button class="btn btn__remove" data-index="${i}">Remove</button>
            </div>
        </div>    
        `;
    })
    .join("");
}

function toggleRead(e) {
  if (!e.target.matches("input")) return; //skip everything except input
  const item = e.target; // select checkbox
  const index = item.dataset.index; // set checkbox index
  myLibrary[index].read = !myLibrary[index].read; // change read property to opposite
  localStorage.setItem("books", JSON.stringify(myLibrary));
  loopAndDisplay(myLibrary, booksContainer);
}

function removeButton(e) {
  if (!e.target.matches("button")) return; //skip except if button
  const button = e.target;
  const index = button.dataset.index;
  myLibrary.splice(index, 1);
  localStorage.setItem("books", JSON.stringify(myLibrary));
  loopAndDisplay(myLibrary, booksContainer);
}

// Abrir/cerrar formulario
const openForm = document.querySelector("#open-form");
openForm.addEventListener("click", () => {
  formContainer.setAttribute("style", "display: flex;");
  btnOpenForm.setAttribute("style", "display: none;");
});
const closeForm = document.querySelector("#close-form");
closeForm.addEventListener("click", () => {
  formContainer.setAttribute("style", "display: none;");
  btnOpenForm.setAttribute("style", "display: block;");
});

//Event listeners
form.addEventListener("submit", addBookToLibrary);
booksContainer.addEventListener("click", toggleRead);
booksContainer.addEventListener("click", removeButton);
loopAndDisplay(myLibrary, booksContainer);