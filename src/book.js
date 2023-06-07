// CONSTRUCTOR
function Book(title, author, totalPages) {
  this.title = title;
  this.author = author;
  this.totalPages = totalPages;
  this.isRead = false;
  this.id = totalBookID;
}

// CREATE BOOK
function createBook() {
  const inputBookName = document.getElementById("input-book-name");
  const inputAuthorName = document.getElementById("input-author-name");
  const inputTotalPages = document.getElementById("input-total-pages");

  if (!isValidInputs(inputBookName, inputAuthorName, inputTotalPages)) {
    return;
  }

  newBook = new Book(
    inputBookName.value,
    inputAuthorName.value,
    inputTotalPages.value
  );

  myLibrary.push(newBook);
  createBookWeb(newBook);
  totalBookID++;
  closeMenu();
}

function createBookWeb(newBook) {
  const library = document.querySelector(".library");
  const bookDiv = document.createElement("div");
  const titleBook = document.createElement("h2");
  const authorNameParagraph = document.createElement("p");
  const authorName = document.createElement("span");
  const totalPagesParagraph = document.createElement("p");
  const totalPages = document.createElement("span");
  const pagesText = document.createTextNode(" pages");
  const bookOptionsDiv = document.createElement("div");
  const icon = document.createElement("i");
  const state = document.createElement("input");

  // book
  bookDiv.classList.add("book");
  bookDiv.dataset.id = `${newBook.id}`;

  // title
  titleBook.textContent = newBook.title;
  titleBook.classList.add("book-name");
  titleBook.dataset.id = `title-${newBook.id}`;

  // author
  authorNameParagraph.textContent = "By ";
  authorName.textContent = newBook.author;
  authorName.classList.add("author-name");
  authorName.dataset.id = `author-${newBook.id}`;

  // pages
  totalPagesParagraph.textContent = "With ";
  totalPages.textContent = newBook.totalPages;
  totalPages.classList.add("total-pages");
  totalPages.dataset.id = `totalPages-${newBook.id}`;

  // book options
  bookOptionsDiv.classList.add("book-options");

  // button
  icon.classList.add("open-menu-button");
  icon.dataset.id = `icon-${newBook.id}`;
  icon.classList.add("fa-solid");
  icon.classList.add("fa-pencil");
  icon.addEventListener("click", openMenuToUpdate);

  // state
  state.type = "checkbox";
  state.checked = newBook.state;
  state.classList.add("read-check");
  state.dataset.id = `state-${newBook.id}`;
  state.addEventListener("change", changeBookState);

  // appends
  bookDiv.appendChild(titleBook);
  authorNameParagraph.appendChild(authorName);
  bookDiv.appendChild(authorNameParagraph);
  totalPagesParagraph.appendChild(totalPages);
  totalPagesParagraph.appendChild(pagesText);
  bookDiv.appendChild(totalPagesParagraph);
  bookOptionsDiv.appendChild(icon);
  bookOptionsDiv.appendChild(state);
  bookDiv.appendChild(bookOptionsDiv);
  library.appendChild(bookDiv);
}

// UPDATE BOOK
function updateBook() {
  const inputBookName = document.getElementById("input-book-name");
  const inputAuthorName = document.getElementById("input-author-name");
  const inputTotalPages = document.getElementById("input-total-pages");

  if (!isValidInputs(inputBookName, inputAuthorName, inputTotalPages)) {
    return;
  }

  const actualBook = myLibrary.find((book) => book.id == idActualBook);

  actualBook.title = inputBookName.value;
  actualBook.author = inputAuthorName.value;
  actualBook.totalPages = inputTotalPages.value;

  updateBookWeb(actualBook);
  closeMenu();
}

function updateBookWeb(actualBook) {
  const title = document.querySelector(`[data-id=title-${idActualBook}]`);
  const author = document.querySelector(`[data-id=author-${idActualBook}]`);
  const totalPages = document.querySelector(
    `[data-id=totalPages-${idActualBook}]`
  );

  title.textContent = actualBook.title;
  author.textContent = actualBook.author;
  totalPages.textContent = actualBook.totalPages;
}

// REMOVE BOOK
function removeBook() {
  removeBookWeb();
  myLibrary = myLibrary.filter((book) => book.id != idActualBook);
  closeMenu();
}

function removeBookWeb() {
  const book = document.querySelector(`[data-id="${idActualBook}"]`);
  book.remove();
}