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

  console.log(icon);

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
