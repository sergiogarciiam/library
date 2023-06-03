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

  if (input.value === "") {
    input.style.borderColor = redColor;
    valid = false;
  } else {
    input.style.borderColor = greenColor;
  }

  return valid;
}
