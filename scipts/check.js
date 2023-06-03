const checks = document.querySelectorAll(".read-check");

checks.forEach((check) => {
  check.addEventListener("change", changeBookState);
});

function changeBookState(e) {
  const book = e.target.parentNode.parentNode;
  console.log("hello");
  book.classList.toggle("read");
}
