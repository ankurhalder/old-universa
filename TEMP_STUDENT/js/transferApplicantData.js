function transferApplicantData() {
  const verify = localStorage.getItem("token");
  if (verify === null) {
    window.location.href = "/index.html";
  }
  const userId = localStorage.getItem("loginUserId");
  fetch(`https://universa-api.onrender.com/student/temp/${userId}`, {
    method: "GET",
    headers: {
      token: verify,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Name's
      let FIRST_NAME = document.getElementById("personal_info_first_name");
      FIRST_NAME.value = data.data.personal_info.first_name;
      let MIDDLE_NAME = document.getElementById("personal_info_middle_name");
      MIDDLE_NAME.value = data.data.personal_info.middle_name;
      let LAST_NAME = document.getElementById("personal_info_last_name");
      LAST_NAME.value = data.data.personal_info.last_name;

      // Personal Info
      let EMAIL = document.getElementById("personal_info_email");
      EMAIL.value = data.data.personal_info.email;
      let CONTACT = document.getElementById("personal_info_contact");
      CONTACT.value = data.data.personal_info.contact;
      let GENDER = document.getElementById("gender");
      GENDER.value = data.data.personal_info.gender;
      let DOB = document.getElementById("dob");
      DOB.value = data.data.personal_info.dob;
      let BLOOD_GROUP = document.getElementById("blood_group");
      BLOOD_GROUP.value = data.data.personal_info.blood_group;
      let CATEGORY = document.getElementById("personal_info_category");
      CATEGORY.value = data.data.personal_info.category;

      // Present Address
      let PRESENT_ADDRESS = document.getElementById("present_address");
      PRESENT_ADDRESS.value = data.data.personal_info.present_address.street;
      let PRESENT_PINCODE = document.getElementById("present_pincode");
      PRESENT_PINCODE.value = data.data.personal_info.present_address.pincode;
      let PRESENT_CITY = document.getElementById("present_city");
      PRESENT_CITY.value = data.data.personal_info.present_address.city;
      let PRESENT_DISTRICT = document.getElementById("present_district");
      PRESENT_DISTRICT.value = data.data.personal_info.present_address.district;
      let PRESENT_STATE = document.getElementById("present_state");
      PRESENT_STATE.value = data.data.personal_info.present_address.state;
      // Permanent Address
      let PERMANENT_ADDRESS = document.getElementById("permanent_address");
      PERMANENT_ADDRESS.value =
        data.data.personal_info.permanent_address.street;
      let PERMANENT_PINCODE = document.getElementById("permanent_pincode");
      PERMANENT_PINCODE.value =
        data.data.personal_info.permanent_address.pincode;
      let PERMANENT_CITY = document.getElementById("permanent_city");
      PERMANENT_CITY.value = data.data.personal_info.permanent_address.city;
      let PERMANENT_DISTRICT = document.getElementById("permanent_district");
      PERMANENT_DISTRICT.value =
        data.data.personal_info.permanent_address.district;
      let PERMANENT_STATE = document.getElementById("permanent_state");
      PERMANENT_STATE.value = data.data.personal_info.permanent_address.state;

      // Academic Info
      // let COURSE_NAME = document.getElementById("course_name");
      // COURSE_NAME.value = data.data.course_info.course_name;
      let COURSE_DURATION = document.getElementById("course_duration");
      COURSE_DURATION.value = data.data.course_info.duration;
      let COURSE_STREAM = document.getElementById("course_stream");
      COURSE_STREAM.value = data.data.course_info.stream;
      let ADMISSION_YEAR = document.getElementById("admission_year");
      ADMISSION_YEAR.value = data.data.course_info.admission_year;
    })
    .catch((error) => console.error(error));
}
