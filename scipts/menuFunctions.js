function openMenuToCreate() {
  const blocker = document.querySelector(".blocker");
  const header = document.querySelector(".header");
  const main = document.querySelector(".main");
  const menu = document.querySelector(".menu");
  const createButton = document.querySelector(".create-button");

  blocker.classList.remove("hide");
  header.style.opacity = 0.5;
  main.style.opacity = 0.5;
  menu.classList.remove("hide");
  createButton.classList.remove("hide");
}

function openMenuToUpdate(event) {
  const blocker = document.querySelector(".blocker");
  const header = document.querySelector(".header");
  const main = document.querySelector(".main");
  const menu = document.querySelector(".menu");
  const updateButton = document.querySelector(".update-button");
  const removeButton = document.querySelector(".remove-button");

  blocker.classList.remove("hide");
  header.style.opacity = 0.5;
  main.style.opacity = 0.5;
  menu.classList.remove("hide");
  updateButton.classList.remove("hide");
  removeButton.classList.remove("hide");

  idActualBook = event.target.parentNode.parentNode.dataset.id;

  const actualBook = myLibrary.find((book) => book.id == idActualBook);
  const inputBookName = document.getElementById("input-book-name");
  const inputAuthorName = document.getElementById("input-author-name");
  const inputTotalPages = document.getElementById("input-total-pages");

  inputBookName.value = actualBook.title;
  inputAuthorName.value = actualBook.author;
  inputTotalPages.value = actualBook.totalPages;
}

function closeMenu() {
  const blocker = document.querySelector(".blocker");
  const header = document.querySelector(".header");
  const main = document.querySelector(".main");
  const menu = document.querySelector(".menu");
  const updateButton = document.querySelector(".update-button");
  const removeButton = document.querySelector(".remove-button");
  const createButton = document.querySelector(".create-button");

  blocker.classList.add("hide");
  header.style.opacity = 1;
  main.style.opacity = 1;
  menu.classList.add("hide");
  createButton.classList.add("hide");
  updateButton.classList.add("hide");
  removeButton.classList.add("hide");

  clearMenu();
}

function clearMenu() {
  const inputBookName = document.getElementById("input-book-name");
  const inputAuthorName = document.getElementById("input-author-name");
  const inputTotalPages = document.getElementById("input-total-pages");

  inputBookName.value = "";
  inputAuthorName.value = "";
  inputTotalPages.value = "";
  inputBookName.style.borderColor = "";
  inputAuthorName.style.borderColor = "";
  inputTotalPages.style.borderColor = "";
  clearIcon(inputBookName);
  clearIcon(inputAuthorName);
  clearIcon(inputTotalPages);
}

function clearIcon(input) {
  const icon = input.parentNode.children[1];
  icon.classList.remove("fa-check");
  icon.classList.remove("fa-xmark");
}
