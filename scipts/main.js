const greenColor = "#92b664";
const redColor = "#b66464";

let myLibrary = [
  {
    title: "Book Name",
    author: "Author Name",
    totalPages: 250,
    isRead: false,
    id: 2,
  },
];
let totalBookID = 0;
let idActualBook = 0;

// MAIN
addMenuEvents();
addInitialEvents();

// FUNCTIONS
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
  totalBookID = myLibrary.slice(-1)[0].id + 1;
  console.log(totalBookID);
  myLibrary.forEach((book) => {
    createBookWeb(book);
  });
}

// UTILS
function changeBookState(event) {
  const book = event.target.parentNode.parentNode;
  const bookOptions = book.querySelector("div");

  book.classList.toggle("read");

  createAnimationAndChange(book, bookOptions);
}

function createAnimationAndChange(bookDiv, bookOptions) {
  const bookToChange = myLibrary.find((book) => book.id == bookDiv.dataset.id);
  const read = document.createElement("p");

  if (bookDiv.classList.contains("read")) {
    read.textContent = "read";
    read.style.color = greenColor;
    bookToChange.isRead = true;
  } else {
    read.textContent = "no read";
    read.style.color = redColor;
    bookToChange.isRead = false;
  }

  read.classList.add("read-content");
  bookOptions.appendChild(read);

  setTimeout(() => {
    read.remove();
  }, 1500);
}
