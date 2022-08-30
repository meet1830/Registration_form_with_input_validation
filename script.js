const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const contact = document.getElementById("contact");
const batch = document.getElementById("batch");
const module = document.getElementById("module");
const tnC = document.getElementById("tnC");

let fnerror = false;
let lnerror = false;
let emerror = false;
let conerror = false;
let bterror = false;
let mderror = false;
let tncerror = false;

function validate() {
  // validate first name
  if (firstName.value.length >= 3) {
    document.getElementById("first-name-valid").style.display = "block";
    document.getElementById("first-name-invalid").style.display = "none";
    fnerror = false;
  } else {
    document.getElementById("first-name-valid").style.display = "none";
    document.getElementById("first-name-invalid").style.display = "block";
    fnerror = true;
  }

  // validate last name
  if (lastName.value.length >= 3) {
    document.getElementById("last-name-valid").style.display = "block";
    document.getElementById("last-name-invalid").style.display = "none";
    lnerror = false;
  } else {
    document.getElementById("last-name-valid").style.display = "none";
    document.getElementById("last-name-invalid").style.display = "block";
    lnerror = true;
  }

  // validate email
  let str = email.value;
  if (
    str.length >= 6 &&
    str.includes("@") &&
    str.includes(".") &&
    str.indexOf("@") != 0 &&
    str.lastIndexOf(".") < str.length - 2
  ) {
    document.getElementById("email-valid").style.display = "block";
    document.getElementById("email-invalid").style.display = "none";
    emerror = false;
  } else {
    document.getElementById("email-valid").style.display = "none";
    document.getElementById("email-invalid").style.display = "block";
    emerror = true;
  }

  // validate phone number
  if (contact.value.length === 10 && !isNaN(contact.value)) {
    document.getElementById("contact-valid").style.display = "block";
    document.getElementById("contact-invalid").style.display = "none";
    conerror = false;
  } else {
    document.getElementById("contact-valid").style.display = "none";
    document.getElementById("contact-invalid").style.display = "block";
    conerror = true;
  }

  // validate batch no.
  if (batch.value != document.getElementById("batch-default").value) {
    document.getElementById("batch-valid").style.display = "block";
    document.getElementById("batch-invalid").style.display = "none";
    bterror = false;
  } else {
    document.getElementById("batch-valid").style.display = "none";
    document.getElementById("batch-invalid").style.display = "block";
    bterror = true;
  }

  // validate module number
  if (module.value != document.getElementById("module-default").value) {
    document.getElementById("module-valid").style.display = "block";
    document.getElementById("module-invalid").style.display = "none";
    mderror = false;
  } else {
    document.getElementById("module-valid").style.display = "none";
    document.getElementById("module-invalid").style.display = "block";
    mderror = true;
  }

  // validate terms and conditions
  if (!tnC.checked) {
    document.getElementById("tnC-invalid").style.display = "block";
    document.getElementById("tnC-valid").style.display = "none";
    tncerror = true;
  } else {
    document.getElementById("tnC-invalid").style.display = "none";
    document.getElementById("tnC-valid").style.display = "block";
    tncerror = false;
  }

  if (
    !fnerror &&
    !lnerror &&
    !emerror &&
    !conerror &&
    !bterror &&
    !mderror &&
    !tncerror
  ) {
    alert("Your details have been saved successfully!");

    // reset form
    firstName.value = "";
    document.getElementById("first-name-valid").style.display = "none";
    document.getElementById("first-name-invalid").style.display = "none";

    lastName.value = "";
    document.getElementById("last-name-valid").style.display = "none";
    document.getElementById("last-name-invalid").style.display = "none";

    email.value = "";
    document.getElementById("email-valid").style.display = "none";
    document.getElementById("email-invalid").style.display = "none";

    contact.value = "";
    document.getElementById("contact-valid").style.display = "none";
    document.getElementById("contact-invalid").style.display = "none";

    batch.value = document.getElementById("batch-default").value;
    document.getElementById("batch-valid").style.display = "none";
    document.getElementById("batch-invalid").style.display = "none";

    module.value = document.getElementById("module-default").value;
    document.getElementById("module-valid").style.display = "none";
    document.getElementById("module-invalid").style.display = "none";

    tnC.checked = false;
    document.getElementById("tnC-invalid").style.display = "none";
    document.getElementById("tnC-valid").style.display = "none";
  }
}
