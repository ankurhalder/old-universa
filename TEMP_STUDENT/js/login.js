const collegedata = () => {
  const college_id = "304";

  fetch(`https://universa-api.onrender.com/college?college_id=${college_id}`, {
    method: "GET",
    headres: {},
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("college_data", JSON.stringify(data.data));
    });
};

const userId = document.getElementById("user_Id");
const password = document.getElementById("password");
function login() {
  const loginData = {
    user_id: userId.value,
    password: password.value,
  };
  if (!validateUserId()) {
    alert("Please enter your User ID.");
    return;
  }
  if (!validatePassword()) {
    alert("Your password is wrong please try again.");
    return;
  }
  fetch("https://universa-api.onrender.com/account/login", {
    method: "POST",
    body: JSON.stringify(loginData),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === true) {
        // Login successful
        collegedata();
        console.log("Login successful");
        console.log(data.message);
        console.log(JSON.parse(localStorage.getItem("college_data")));

        // Store user ID in local storage
        localStorage.setItem("loginUserId", data.data.user_id);
        localStorage.setItem("userData", JSON.stringify(data.data));
        localStorage.setItem("token", data.authToken);
        if (data.data.type === "guest") {
          window.location.href = "/TEMP_STUDENT/dashboard_st_lp.html";
        } else if (data.data.type === "admin") {
          window.location.href = "/ADMIN/admin.html";
        } else if (data.data.type === "student") {
          window.location.href = "/P_STUDENT/p_student.html";
        }
        console.log(localStorage.getItem("loginUserId"));
      } else if (data.status === false) {
        // Login unsuccessful
        console.log("Login unsuccessful");
        console.log(data.message);
        msg = data.message;
        alert(msg);
      }
    })
    .catch((error) => console.error(error));

  function validateUserId() {
    const userIdValue = userId.value.trim();
    if (userIdValue.length === 0) {
      userId.focus();
      return false;
    }
    return true;
  }

  // function validatePassword() {
  //   const passwordValue = password.value.trim();
  //   if (passwordValue.length < 8) {
  //     password.focus();
  //     alert("Password must be at least 8 characters long.");
  //     return false;
  //   }
  //   if (!/[A-Z]/.test(passwordValue)) {
  //     password.focus();
  //     alert("Password must contain at least one uppercase letter.");
  //     return false;
  //   }
  //   if (!/[a-z]/.test(passwordValue)) {
  //     password.focus();
  //     alert("Password must contain at least one lowercase letter.");
  //     return false;
  //   }
  //   if (!/[\W_]/.test(passwordValue)) {
  //     password.focus();
  //     alert("Password must contain at least one special character.");
  //     return false;
  //   }
  //   return true;
  // }
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
}
