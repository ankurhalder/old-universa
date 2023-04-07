function fetchData() {
  const urlParams = new URLSearchParams(window.location.search);
  // let applicant_id = urlParams.get("id");
  const userId = urlParams.get("id");
  const verify = localStorage.getItem("token");
  if (verify === null) {
    window.location.href = "/index.html";
  }
  // retrieve user_id from local storage
  fetch(`https://universa-api.onrender.com/student/${userId}`, {
    // include user_id in the URL
    method: "GET",
    headers: {
      "token": verify,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let first_name_db = document.getElementById("full_name");
      first_name_db.innerText =
        data.data.personal_info.first_name +
        " " +
        data.data.personal_info.last_name;
      let User_Name_Dashboard = document.getElementById("user_name_dashboard");
      // User_Name_Dashboard.innerText =
      //   data.data.personal_info.first_name + `'s DASHBOARD`;
      let Email = document.getElementById("email");
      Email.innerText = data.data.personal_info.email;
      let contactNo = document.getElementById("contact_no");
      contactNo.innerText = data.data.personal_info.contact;
      let Gender = document.getElementById("gender");
      Gender.innerText = data.data.personal_info.gender;

      // check if DOB is null or not before setting innerText of Dob element
      let Dob = document.getElementById("dob");
      if (data.data.personal_info.dob === null) {
        Dob.innerText = "Please Update";
      } else {
        let DOB = new Date(data.data.personal_info.dob);
        Dob.innerText = `${DOB.getDate()}/${
          DOB.getMonth() + 1
        }/${DOB.getFullYear()}`;
      }
      let Category = document.getElementById("category");
      Category.innerText = data.data.personal_info.category;
      let blood_Groop = document.getElementById("blood_group");
      blood_Groop.innerText = data.data.personal_info.blood_group;
      // present address
      let presentAddress = document.getElementById("present_address");
      presentAddress.innerText = data.data.personal_info.present_address.street;
      let presentCity = document.getElementById("present_city");
      presentCity.innerText = data.data.personal_info.present_address.city;
      let presentPincode = document.getElementById("present_pincode");
      presentPincode.innerText =
        data.data.personal_info.present_address.pincode;
      let presentDistrict = document.getElementById("present_district");
      presentDistrict.innerText =
        data.data.personal_info.present_address.district;
      let presentState = document.getElementById("present_state");
      presentState.innerText = data.data.personal_info.present_address.state;
      // permanent address
      let permanentAddress = document.getElementById("permanent_address");
      permanentAddress.innerText =
        data.data.personal_info.permanent_address.street;
      let permanentCity = document.getElementById("permanent_city");
      permanentCity.innerText = data.data.personal_info.permanent_address.city;
      let permanentPincode = document.getElementById("permanent_pincode");
      permanentPincode.innerText =
        data.data.personal_info.permanent_address.pincode;
      let permanentDistrict = document.getElementById("permanent_district");
      permanentDistrict.innerText =
        data.data.personal_info.permanent_address.district;
      let permanentState = document.getElementById("permanent_state");
      permanentState.innerText =
        data.data.personal_info.permanent_address.state;
      // course Info
      let admissionYear = document.getElementById("admission_year");
      admissionYear.innerText = data.data.course_info.admission_year;
      let enrollmentNumber = document.getElementById("enrollment_number");
      enrollmentNumber.innerText = data.data.course_info.enrollment_number;
      let courseName = document.getElementById("course_name");
      courseName.innerText = data.data.course_info.course_name;
      let courseDuration = document.getElementById("course_duration");
      courseDuration.innerText = data.data.course_info.duration;
      let Stream = document.getElementById("stream");
      Stream.innerText = data.data.course_info.stream;
      let registrationNumber = document.getElementById("registration_number");
      registrationNumber.innerText = data.data.course_info.registration_number;
    })
    .catch((error) => console.error(error));
}
