const registerForm = document.getElementById("register-form");
const firstName = document.getElementById("first-name");
const middleName = document.getElementById("middle-name");
const lastName = document.getElementById("last-name");
const Email = document.getElementById("email");
const Contact = document.getElementById("contact");
const Password = document.getElementById("password");
const confirm_Password = document.getElementById("confirm-password");

registerForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  const userdata = {
    first_name: firstName.value,
    middle_name: middleName.value,
    last_name: lastName.value,
    email: Email.value,
    contact: Contact.value,
    password: Password.value,
    confirm_password: confirm_Password.value,
  };
  
  if (!validateFirstName()) {
    alert("Please enter your first name");
    return;
  }
  if (!validateLastName()) {
    alert("Please enter your last name");
    return;
  }
  if (!validateEmail()) {
    alert("Please enter a valid email address");
    return;
  }
  if (!validateContact()) {
    alert("Please enter a valid contact number with 10 numbers");
    return;
  }
  if (!validatePassword()) {
    alert("Please enter a password that is at least 8 characters long and contains at least one uppercase letter, one lowercase letter, and one special character");
    return;
  }
  if (!validateConfirmPassword()) {
    alert("Password does't match");
    return;
  }
  
  console.log(JSON.stringify(userdata));
  fetch("https://universa-api.onrender.com/account", {
    method: "POST",
    body: JSON.stringify(userdata),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert(
          "Congratulations you are successfully registered now check your inbox"
        );
        window.location = "/Login.html";
      } else {
        alert("Registration was Unsuccessful");
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});

function validateFirstName() {
  let firstName = document.getElementById("first-name");
  if (firstName.value.length === 0) {
    firstName.focus();
    return false;
  }
  firstName.addEventListener("blur", validateFirstName);
  return true;
}

function validateMiddleName() {
  // validation code for middle name
  return true;
}

function validateLastName() {
  let lastName = document.getElementById("last-name");
  if (lastName.value.length === 0) {
    lastName.focus();
    return false;
  }
  lastName.addEventListener("blur", validateLastName);
  return true;
}

function validateEmail() {
  let email = document.getElementById("email");
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    email.focus();
    return false;
  }
  email.addEventListener("blur", validateEmail);
  return true;
}

function validateContact() {
  let contact = document.getElementById("contact");
  let contactRegex = /^[0-9]{10}$/;
  if (!contactRegex.test(contact.value)) {
    contact.focus();
    return false;
  }
  contact.addEventListener("blur", validateContact);
  return true;
}

function validatePassword() {
  let password = document.getElementById("password");
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  if (!passwordRegex.test(password.value)) {
    password.focus();
    return false;
    }
    password.addEventListener("blur", validatePassword);
    return true;
    }
    
    function validateConfirmPassword() {
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm-password");
    if (password.value !== confirmPassword.value) {
    confirmPassword.focus();
    return false;
    }
    confirmPassword.addEventListener("blur", validateConfirmPassword);
    return true;
    }
