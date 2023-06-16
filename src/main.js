class Library {
  constructor() {
    this.myBooks = [
      {
        title: "Book Name",
        author: "Author Name",
        totalPages: 250,
        isRead: false,
        id: 2,
      },
    ];
    this.totalBookID = this.myBooks.slice(-1)[0].id + 1;
    this.idActualBook = 0;
  }
}

class Book {
  constructor(title, author, totalPages, id) {
    this.title = title;
    this.author = author;
    this.totalPages = totalPages;
    this.isRead = false;
    this.id = id;
  }
}

const mainDisplayController = (() => {
  const setUp = () => {
    addEvents();
    libraryDisplayController.createLibrary();
  };

  function addEvents() {
    const addBookButton = document.querySelector(".add-book-button");
    const closeMenuButton = document.querySelector(".close-menu-button");
    const createButton = document.querySelector(".create-button");
    const updateButton = document.querySelector(".update-button");
    const removeButton = document.querySelector(".remove-button");
    const changeThemeButton = document.querySelector(".change-theme-button");

    addBookButton.addEventListener(
      "click",
      menuDisplayController.openMenuToCreate
    );
    closeMenuButton.addEventListener("click", menuDisplayController.closeMenu);
    createButton.addEventListener("click", libraryDisplayController.createBook);
    updateButton.addEventListener("click", libraryDisplayController.updateBook);
    removeButton.addEventListener("click", libraryDisplayController.removeBook);
    changeThemeButton.addEventListener("click", changeTheme);
  }

  function changeTheme(event) {
    const root = document.documentElement;
    const newTheme = root.className === "dark" ? "light" : "dark";
    root.className = newTheme;

    const button = event.target;
    if (newTheme === "dark") {
      button.classList.remove("fa-moon");
      button.classList.add("fa-sun");
    } else {
      button.classList.remove("fa-sun");
      button.classList.add("fa-moon");
    }
  }

  return { setUp };
})();

const libraryDisplayController = (() => {
  let library = null;
  const greenColor = "#92b664";
  const redColor = "#b66464";

  const createLibrary = () => {
    library = new Library();

    library.myBooks.forEach((book) => {
      createBookWeb(book);
    });
  };

  const getActualBook = (event) => {
    library.idActualBook = event.target.parentNode.parentNode.dataset.id;
    const actualBook = library.myBooks.find(
      (book) => book.id == library.idActualBook
    );
    return actualBook;
  };

  // CREATE BOOK
  const createBook = () => {
    const inputBookName = document.getElementById("input-book-name");
    const inputAuthorName = document.getElementById("input-author-name");
    const inputTotalPages = document.getElementById("input-total-pages");

    if (!isValidInputs(inputBookName, inputAuthorName, inputTotalPages)) {
      return;
    }

    newBook = new Book(
      inputBookName.value,
      inputAuthorName.value,
      inputTotalPages.value,
      library.totalBookID
    );

    library.myBooks.push(newBook);
    createBookWeb(newBook);
    library.totalBookID++;
    menuDisplayController.closeMenu();
  };

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
    icon.addEventListener("click", menuDisplayController.openMenuToUpdate);

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
  const updateBook = () => {
    const inputBookName = document.getElementById("input-book-name");
    const inputAuthorName = document.getElementById("input-author-name");
    const inputTotalPages = document.getElementById("input-total-pages");

    if (!isValidInputs(inputBookName, inputAuthorName, inputTotalPages)) {
      return;
    }

    const actualBook = library.myBooks.find(
      (book) => book.id == library.idActualBook
    );

    actualBook.title = inputBookName.value;
    actualBook.author = inputAuthorName.value;
    actualBook.totalPages = inputTotalPages.value;

    updateBookWeb(actualBook);
    menuDisplayController.closeMenu();
  };

  function updateBookWeb(actualBook) {
    const title = document.querySelector(
      `[data-id=title-${library.idActualBook}]`
    );
    const author = document.querySelector(
      `[data-id=author-${library.idActualBook}]`
    );
    const totalPages = document.querySelector(
      `[data-id=totalPages-${library.idActualBook}]`
    );

    title.textContent = actualBook.title;
    author.textContent = actualBook.author;
    totalPages.textContent = actualBook.totalPages;
  }

  // REMOVE BOOK
  const removeBook = () => {
    removeBookWeb();
    library.myBooks = library.myBooks.filter(
      (book) => book.id != library.idActualBook
    );
    menuDisplayController.closeMenu();
  };

  function removeBookWeb() {
    const book = document.querySelector(`[data-id="${library.idActualBook}"]`);
    book.remove();
  }

  // UTILS
  function isValidInputs(inputBookName, inputAuthorName, inputTotalPages) {
    const isValidInputBookName = isValidIndividualInput(inputBookName);
    const isValidInputAuthorName = isValidIndividualInput(inputAuthorName);
    const isValidInputTotalPages = isValidIndividualInput(inputTotalPages);
    return (
      isValidInputBookName && isValidInputAuthorName && isValidInputTotalPages
    );
  }

  function isValidIndividualInput(input) {
    let valid = true;
    const icon = input.parentNode.children[1];

    if (input.value === "") {
      input.style.borderColor = redColor;
      icon.classList.remove("fa-check");
      icon.classList.add("fa-xmark");
      valid = false;
    } else {
      input.style.borderColor = greenColor;
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-check");
    }
    return valid;
  }

  function changeBookState(event) {
    const book = event.target.parentNode.parentNode;
    const bookOptions = book.querySelector("div");

    book.classList.toggle("read");
    createAnimationAndChange(book, bookOptions);
  }

  function createAnimationAndChange(bookDiv, bookOptions) {
    const bookToChange = library.myBooks.find(
      (book) => book.id == bookDiv.dataset.id
    );
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

  return { createLibrary, getActualBook, createBook, updateBook, removeBook };
})();

const menuDisplayController = (() => {
  const openMenuToCreate = () => {
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
  };

  const openMenuToUpdate = (event) => {
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

    fillInputs(event);
  };

  const closeMenu = () => {
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
  };

  function fillInputs(event) {
    const actualBook = libraryDisplayController.getActualBook(event);
    const inputBookName = document.getElementById("input-book-name");
    const inputAuthorName = document.getElementById("input-author-name");
    const inputTotalPages = document.getElementById("input-total-pages");

    inputBookName.value = actualBook.title;
    inputAuthorName.value = actualBook.author;
    inputTotalPages.value = actualBook.totalPages;
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

  return { openMenuToCreate, openMenuToUpdate, closeMenu };
})();

// MAIN
mainDisplayController.setUp();
