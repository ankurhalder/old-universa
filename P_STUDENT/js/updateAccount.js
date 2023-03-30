function updateAccount() {
  const userid = localStorage.getItem("userId");
  console.log(userid);
  // name
  const firstName = document.getElementById("student_first_name").value;
  const middleName = document.getElementById("student_middle_name").value;
  const lastName = document.getElementById("student_last_name").value;
  //personal data
  const Gender = document.getElementById("student_gender").value;
  // address
  const presentAddress = document.getElementById("student_present_address").value;
  const presentPincode = document.getElementById("student_present_pincode").value;
  const presentCity = document.getElementById("student_present_city").value;
  const presentDistrict = document.getElementById("student_present_district").value;
  const presentState = document.getElementById("student_present_state").value;
  const permanentAddress = document.getElementById("student_permanent_address").value;
  const permanentPincode = document.getElementById("student_permanent_pincode").value;
  const permanentCity = document.getElementById("student_permanent_city").value;
  const permanentDistrict = document.getElementById("student_permanent_district").value;
  const permanentState = document.getElementById("student_permanent_state").value;
  const date_Of_Birth = document.getElementById("student_dob").value;
  const blood_Groop = document.getElementById(
    "student_blood_group"
  ).value;
  const Category = document.getElementById("student_category").value;
  const Email = document.getElementById("student_email").value;
  const Contact = document.getElementById("student_contact").value;

  const personalInfo = {
    personal_info: {
      first_name: firstName,
      middle_name: middleName,
      last_name: lastName,
       dob: date_Of_Birth,
       gender: Gender,

      present_address: {
        street: presentAddress,
        pincode: presentPincode,
        city: presentCity,
        district: presentDistrict,
        state: presentState,
      },
      permanent_address: {
        street: permanentAddress,
        pincode: permanentPincode,
        city: permanentCity,
        district: permanentDistrict,
        state: permanentState,
      },
      email: Email,
      contact: Contact,
      category: Category,
      blood_group: blood_Groop,
    },
    course_info: {
      enrollment_number: `${userid}`,
    },
  };
  // calling function
  if (!firstname()) {
    alert("Please enter your First Name");
    return;
  }
  if (!lastname()) {
    alert("Please enter your Last Name");
    return;
  }
  if (!presentaddress()) {
    alert("Please enter your Present Address");
    return;
  }
  if (!presentpincode()) {
    alert("Please enter your Present Pincode");
    return;
  }
  if (!presentcity()) {
    alert("Please enter your Present City");
    return;
  }
  if (!presentdistrict()) {
    alert("Please enter your Present District");
    return;
  }
  if (!presentstate()) {
    alert("Please enter your Present State");
    return;
  }
  if (!permanentaddress()) {
    alert("Please enter your Permanent Address");
    return;
  }
  if (!permanentpincode()) {
    alert("Please enter your Permanent Pincode");
    return;
  }
  if (!permanentcity()) {
    alert("Please enter your Permanent City");
    return;
  }
  if (!permanentdistrict()) {
    alert("Please enter your Permanent District");
    return;
  }
  if (!permanentstate()) {
    alert("Please enter your Permanent State");
    return;
  }
  // updating data
  fetch(`https://universa-api.onrender.com/student/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(personalInfo),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Data saved/updated successfully:");
    //   window.location.href = "/TEMP_STUDENT/dashboard_st_lp.html";
    })
    .catch((error) => {
      console.error(error);
      alert("Error saving/updating data please try again");
    });
  // for name
  function firstname() {
    let firstNameField = document.getElementById("student_first_name");
    if (firstNameField.value.length === 0) {
      firstNameField.focus();
      return false;
    }
    firstNameField.addEventListener("blur", firstname);student_
    return true;
  }
  function lastname() {
    let lastNameField = document.getElementById("student_last_name");
    if (lastNameField.value.length === 0) {
      lastNameField.focus();
      return false;
    }
    lastNameField.addEventListener("blur", lastname);
    return true;
  }
  // for present address
  function presentaddress() {
    let presentAddress = document.getElementById("student_present_address");
    if (presentAddress.value.length === 0) {
      presentAddress.focus();
      return false;
    }
    presentAddress.addEventListener("blur", presentaddress);
    return true;
  }
  function presentpincode() {
    let presentPincode = document.getElementById("student_present_pincode");
    if (presentPincode.value.length === 0) {
      presentPincode.focus();
      return false;
    }
    presentPincode.addEventListener("blur", presentpincode);
    return true;
  }
  function presentcity() {
    let presentCity = document.getElementById("student_present_city");
    if (presentCity.value.length === 0) {
      presentCity.focus();
      return false;
    }
    presentCity.addEventListener("blur", presentcity);
    return true;
  }
  function presentdistrict() {
    let presentDistrict = document.getElementById("student_present_district");
    if (presentDistrict.value.length === 0) {
      presentDistrict.focus();
      return false;
    }
    presentDistrict.addEventListener("blur", presentdistrict);
    return true;
  }
  function presentstate() {
    let presentState = document.getElementById("student_present_state");
    if (presentState.value.length === 0) {
      presentState.focus();
      return false;
    }
    presentState.addEventListener("blur", presentstate);
    return true;
  }
  //for permanent permanent
  function permanentaddress() {
    let permanentAddress = document.getElementById("student_permanent_address");
    if (permanentAddress.value.length === 0) {
      permanentAddress.focus();
      return false;
    }
    permanentAddress.addEventListener("blur", permanentaddress);
    return true;
  }
  function permanentpincode() {
    let permanentPincode = document.getElementById("student_permanent_pincode");
    if (permanentPincode.value.length === 0) {
      permanentPincode.focus();
      return false;
    }
    permanentPincode.addEventListener("blur", permanentpincode);
    return true;
  }
  function permanentcity() {
    let permanentCity = document.getElementById("student_permanent_city");
    if (permanentCity.value.length === 0) {
      permanentCity.focus();
      return false;
    }
    permanentCity.addEventListener("blur", permanentcity);
    return true;
  }
  function permanentdistrict() {
    let permanentDistrict = document.getElementById("student_permanent_district");
    if (permanentDistrict.value.length === 0) {
      permanentDistrict.focus();
      return false;
    }
    permanentDistrict.addEventListener("blur", permanentdistrict);
    return true;
  }
  function permanentstate() {
    let permanentState = document.getElementById("student_permanent_state");
    if (permanentState.value.length === 0) {
      permanentState.focus();
      return false;
    }
    permanentState.addEventListener("blur", permanentstate);
    return true;
  }
}
