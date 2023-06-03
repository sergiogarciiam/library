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

function Book(title, author, totalPages) {
  this.title = title;
  this.author = author;
  this.totalPages = totalPages;
  this.isRead = false;
  this.id = totalBookID;
}

function createBookWeb(newBook) {
  const library = document.querySelector(".library");

  // book
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");
  bookDiv.dataset.id = `${newBook.id}`;

  // title
  const titleBook = document.createElement("h2");
  titleBook.textContent = newBook.title;
  titleBook.classList.add("book-name");
  titleBook.dataset.id = `title-${newBook.id}`;
  bookDiv.appendChild(titleBook);

  // author
  const authorNameParagraph = document.createElement("p");
  authorNameParagraph.textContent = "By ";

  const authorName = document.createElement("span");
  authorName.textContent = newBook.author;
  authorName.classList.add("author-name");
  authorName.dataset.id = `author-${newBook.id}`;

  authorNameParagraph.appendChild(authorName);
  bookDiv.appendChild(authorNameParagraph);

  // pages
  const totalPagesParagraph = document.createElement("p");
  totalPagesParagraph.textContent = "With ";

  const totalPages = document.createElement("span");
  totalPages.textContent = newBook.totalPages;
  totalPages.classList.add("total-pages");
  totalPages.dataset.id = `totalPages-${newBook.id}`;

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
  button.dataset.id = `button-${newBook.id}`;
  button.addEventListener("click", openMenuToUpdate);
  bookOptionsDiv.appendChild(button);

  // state
  const state = document.createElement("input");
  state.type = "checkbox";
  state.checked = newBook.state;
  state.classList.add("read-check");
  state.dataset.id = `state-${newBook.id}`;
  state.addEventListener("change", changeBookState);
  bookOptionsDiv.appendChild(state);

  bookDiv.appendChild(bookOptionsDiv);

  // append
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
