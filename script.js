addClickEvents();

function addClickEvents() {
  const books = document.querySelectorAll(".book");
  const addBookButton = document.querySelector(".add-book-button");
  const closeMenuButton = document.querySelector(".close-menu-button");

  books.forEach((book) => {
    book.addEventListener("click", openMenuToUpdate);
  });

  addBookButton.addEventListener("click", openMenuToCreate);

  closeMenuButton.addEventListener("click", closeMenu);
}

// MENU FUNCTIONS
function openMenuToCreate() {
  const menu = document.querySelector(".menu");
  const createButton = document.querySelector(".create-button");

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
  const menu = document.querySelector(".menu");
  const updateButton = document.querySelector(".update-button");
  const removeButton = document.querySelector(".remove-button");
  const createButton = document.querySelector(".create-button");

  menu.classList.add("hide");
  createButton.classList.add("hide");
  updateButton.classList.add("hide");
  removeButton.classList.add("hide");
}
