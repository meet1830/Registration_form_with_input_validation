const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const state = document.getElementById("state");
const city = document.getElementById("city");
const zip = document.getElementById("zip");
const tnC = document.getElementById("tnC");
let error = false;

function validate() {
  if (firstName.value.length) {
    document.getElementById("first-name-valid").style.display = "block";
    document.getElementById("first-name-invalid").style.display = "none";
    error = false;
  } else {
    document.getElementById("first-name-valid").style.display = "none";
    document.getElementById("first-name-invalid").style.display = "block";
    error = true;
  }

  // empty string is falsy value and string of length more than equal to 1 is truthy hence can check this way
  // but black space will also be considered as truthy
  if (lastName.value.length) {
    document.getElementById("last-name-valid").style.display = "block";
    document.getElementById("last-name-invalid").style.display = "none";
    error = false;
  } else {
    document.getElementById("last-name-valid").style.display = "none";
    document.getElementById("last-name-invalid").style.display = "block";
    error = true;
  }

  /* for email validation checks
        - input field empty
        - should contain '.' and '@'
        - should contain at least two chars after '.'
        - first char cannot be '@'     
    */
   let str = email.value;
  if (
    str.length >= 6 &&
    str.includes("@") &&
    str.includes(".") &&
    str.indexOf("@") != 0 &&
    str.lastIndexOf('.') < str.length - 2
  ) {
    // a@g.co minimum length of email 6
    document.getElementById("email-valid").style.display = "block";
    document.getElementById("email-invalid").style.display = "none";
    error = false;
  } else {
    document.getElementById("email-valid").style.display = "none";
    document.getElementById("email-invalid").style.display = "block";
    error = true;
  }

  if (state.value != document.getElementById('default').value) {
    document.getElementById("state-valid").style.display = "block";
    document.getElementById("state-invalid").style.display = "none";
    error = false;
  } else {
    document.getElementById("state-valid").style.display = "none";
    document.getElementById("state-invalid").style.display = "block";
    error = true;
  }

  if(city.value.length > 2) {
    document.getElementById("city-valid").style.display = "block";
    document.getElementById("city-invalid").style.display = "none";
    error = false;
  } else {
    document.getElementById("city-valid").style.display = "none";
    document.getElementById("city-invalid").style.display = "block";
    error = true;
  }

  // zip.value is always a string so cannot use typeof is equals to number or not
  // can also use parseInt(zip.value) will return NaN is not number or else returns a number which is truthy
  // can add !parseInt(value) to every input if not want it to have a number
  if(zip.value.length === 6 && !isNaN(zip.value)) {
    document.getElementById("zip-valid").style.display = "block";
    document.getElementById("zip-invalid").style.display = "none";
    error = false;
  } else {
    document.getElementById("zip-valid").style.display = "none";
    document.getElementById("zip-invalid").style.display = "block";
    error = true;
  }

  if (!tnC.checked) {
    document.getElementById("tnC-invalid").style.display = "block";
    error = true;
  } else {
    document.getElementById("tnC-invalid").style.display = "none";
    error = false;
  }

  if (!error) {
    alert('Your details have been saved successfully.');

    // reset form
    firstName.value = '';
    document.getElementById("first-name-valid").style.display = "none";

    lastName.value = '';
    document.getElementById("last-name-valid").style.display = "none";

    email.value = '';
    document.getElementById("email-valid").style.display = "none";
    
    state.value = document.getElementById('default').value;
    document.getElementById("state-valid").style.display = "none";

    city.value = '';
    document.getElementById("city-valid").style.display = "none";

    zip.value = '';
    document.getElementById("zip-valid").style.display = "none";

    tnC.checked = false;
    document.getElementById("tnC-invalid").style.display = "none";
  }
  
}
