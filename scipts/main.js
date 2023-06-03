const greenColor = "#92b664";
const redColor = "#b66464";

let myLibrary = [];
let totalBookID = 0;
let idActualBook = 0;

addMenuEvents();
addInitialEvents();

function addMenuEvents() {
  const addBookButton = document.querySelector(".add-book-button");
  const closeMenuButton = document.querySelector(".close-menu-button");
  const createButton = document.querySelector(".create-button");
  const updateButton = document.querySelector(".update-button");
  const removeButton = document.querySelector(".remove-button");

  addBookButton.addEventListener("click", openMenuToCreate);
  closeMenuButton.addEventListener("click", closeMenu);
  createButton.addEventListener("click", createBook);
  updateButton.addEventListener("click", updateBook);
  removeButton.addEventListener("click", removeBook);
}

function addInitialEvents() {
  const openMenuButtons = document.querySelectorAll(".open-menu-button");
  const checks = document.querySelectorAll(".read-check");

  openMenuButtons.forEach((button) => {
    button.addEventListener("click", openMenuToUpdate);
  });

  checks.forEach((check) => {
    check.addEventListener("change", changeBookState);
  });
}

// UTILS
function changeBookState(e) {
  const book = e.target.parentNode.parentNode;
  const bookOptions = book.querySelector("div");

  book.classList.toggle("read");

  createAnimation(book, bookOptions);
}

function createAnimation(book, bookOptions) {
  const read = document.createElement("p");

  if (book.classList.contains("read")) {
    read.textContent = "read";
    read.style.color = greenColor;
  } else {
    read.textContent = "no read";
    read.style.color = redColor;
  }

  read.classList.add("read-content");
  bookOptions.appendChild(read);

  setTimeout(() => {
    read.remove();
  }, 1500);
}
