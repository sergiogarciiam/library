let myLibrary = [];

addClickEvents();

function addClickEvents() {
  const books = document.querySelectorAll(".book");
  const addBookButton = document.querySelector(".add-book-button");
  const closeMenuButton = document.querySelector(".close-menu-button");
  const createButton = document.querySelector(".create-button");

  addBookButton.addEventListener("click", openMenuToCreate);
  closeMenuButton.addEventListener("click", closeMenu);
  createButton.addEventListener("click", createBook);
}

// MENU FUNCTIONS
function openMenuToCreate() {
  const header = document.querySelector(".header");
  const main = document.querySelector(".main");

  const menu = document.querySelector(".menu");
  const createButton = document.querySelector(".create-button");

  header.style.opacity = 0.5;
  main.style.opacity = 0.5;

  menu.classList.remove("hide");
  createButton.classList.remove("hide");
}

function openMenuToUpdate() {
  const menu = document.querySelector(".menu");
  const updateButton = document.querySelector(".update-button");
  const removeButton = document.querySelector(".remove-button");

  menu.classList.remove("hide");
  updateButton.classList.remove("hide");
  removeButton.classList.remove("hide");
}

function closeMenu() {
  const header = document.querySelector(".header");
  const main = document.querySelector(".main");

  const menu = document.querySelector(".menu");
  const updateButton = document.querySelector(".update-button");
  const removeButton = document.querySelector(".remove-button");
  const createButton = document.querySelector(".create-button");

  header.style.opacity = 1;
  main.style.opacity = 1;

  menu.classList.add("hide");
  createButton.classList.add("hide");
  updateButton.classList.add("hide");
  removeButton.classList.add("hide");
}

// CREATE BOOK
function createBook() {
  const inputBookName = document.getElementById("input-book-name");
  const inputAuthorName = document.getElementById("input-author-name");
  const inputTotalPages = document.getElementById("input-total-pages");
  const inputBookState = document.getElementById("input-book-state");

  newBook = new Book(
    inputBookName.value,
    inputAuthorName.value,
    inputTotalPages.value,
    inputBookState.checked
  );
  addBook(newBook);
  closeMenu();
}

function Book(title, author, totalPages, state) {
  this.title = title;
  this.author = author;
  this.totalPages = totalPages;
  this.state = state;
}

function addBook(newBook) {
  const library = document.querySelector(".library");

  // book
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");

  // title
  const titleBook = document.createElement("h2");
  titleBook.textContent = newBook.title;
  titleBook.classList.add("book-name");
  bookDiv.appendChild(titleBook);

  // author
  const authorNameParagraph = document.createElement("p");
  authorNameParagraph.textContent = "By ";

  const authorName = document.createElement("span");
  authorName.textContent = newBook.author;
  authorName.classList.add("author-name");

  authorNameParagraph.appendChild(authorName);
  bookDiv.appendChild(authorNameParagraph);

  // pages
  const totalPagesParagraph = document.createElement("p");
  totalPagesParagraph.textContent = "With ";

  const totalPages = document.createElement("span");
  totalPages.textContent = newBook.totalPages;
  totalPages.classList.add("total-pages");

  totalPagesParagraph.appendChild(totalPages);

  const pagesText = document.createTextNode(" pages");
  totalPagesParagraph.appendChild(pagesText);

  bookDiv.appendChild(totalPagesParagraph);

  // book options
  const bookOptionsDiv = document.createElement("div");
  bookOptionsDiv.classList.add("book-options");

  // button
  const button = document.createElement("button");
  button.textContent = "e";
  button.classList.add("open-menu-button");
  bookOptionsDiv.appendChild(button);

  // state
  const state = document.createElement("input");
  state.type = "checkbox";
  state.checked = newBook.state;
  state.classList.add("read-check");
  bookOptionsDiv.appendChild(state);

  bookDiv.appendChild(bookOptionsDiv);

  // append
  library.appendChild(bookDiv);
}
