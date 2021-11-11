const form = document.querySelector("#form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const zipCode = document.querySelector("#zipCode");
const personalNumber = document.querySelector("#personalNumber");
const mobileNumber = document.querySelector("#mobileNumber");
const errorElement = document.querySelector("#error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

// removing whitespaces from both ends of a string
function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();

  if (firstNameValue === "") {
    setErrorFor(firstName, "First name is required");
  } else {
    setSuccessFor(firstName);
  }

  if (lastNameValue === "") {
    setErrorFor(lastName, "Last name is required");
  } else {
    setSuccessFor(lastName);
  }

  if (zipCode.value === "") {
    setErrorFor(zipCode, "Zip code is required");
  } else {
    setSuccessFor(zipCode);
  }

  if (personalNumber.value.length === 11) {
    setSuccessFor(personalNumber);
  } else {
    setErrorFor(personalNumber, "Personal number must contain 11 digit");
  }

  if (mobileNumber.value === "") {
    setErrorFor(mobileNumber, "Mobile number is required");
  } else {
    setSuccessFor(mobileNumber);
  }

  if (mobileNumber.value.length == 9) {
    setSuccessFor(mobileNumber);
  } else if (mobileNumber.value.length == 13) {
    let firstCharacter = mobileNumber.value.slice(0, 1);
    if (firstCharacter === "+") {
      setSuccessFor(mobileNumber);
    }
  } else {
    setErrorFor(mobileNumber, "Mobile number must contain 9 or 13 digit");
  }
}

// in case of error
function setErrorFor(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("small");

  // adding error text message
  small.innerText = message;
  // adding error class
  formGroup.className = "form-group error";
}

// in case of success
function setSuccessFor(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group success";
}
