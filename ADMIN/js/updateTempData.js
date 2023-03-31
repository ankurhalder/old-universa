const Form = document.getElementById("form");
Form.addEventListener("submit", updateTable);
function updateTable(para) {
  para.preventDefault();
    // name
    const firstName = document.getElementById("personal_info_first_name").value;
    const middleName = document.getElementById("personal_info_middle_name").value;
    const lastName = document.getElementById("personal_info_last_name").value;
    //personal data
    const Gender = document.getElementById("gender").value;
    // address
    const presentAddress = document.getElementById("present_address").value;
    const presentPincode = document.getElementById("present_pincode").value;
    const presentCity = document.getElementById("present_city").value;
    const presentDistrict = document.getElementById("present_district").value;
    const presentState = document.getElementById("present_state").value;
    const permanentAddress = document.getElementById("permanent_address").value;
    const permanentPincode = document.getElementById("permanent_pincode").value;
    const permanentCity = document.getElementById("permanent_city").value;
    const permanentDistrict = document.getElementById("permanent_district").value;
    const permanentState = document.getElementById("permanent_state").value;
    const date_Of_Birth = document.getElementById("dob").value;
    const blood_Groop = document.getElementById("blood_group").value;
    const Category = document.getElementById("personal_info_category").value;
    const Email = document.getElementById("personal_info_email").value;
    const Contact = document.getElementById("personal_info_contact").value;
  // Academic Info
  const Admission_Year = document.getElementById("admission_year").value;
  const Course_Name = document.getElementById("course_name").value;
  const Course_Duration = document.getElementById("course_duration").value;
  const Stream = document.getElementById("stream").value;


  const urlParams = new URLSearchParams(window.location.search);
  let userid = urlParams.get('id');
  console.log(userid);
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
      course_name: Course_Name,
      duration: Course_Duration,
      stream: Stream,
      admission_year: Admission_Year,
    },
  };
  // const urlParams = new URLSearchParams(window.location.search);
  // const id = urlParams.get('id');
  // updating data
  fetch(`https://universa-api.onrender.com/student/temp`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(personalInfo),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      localStorage.setItem("getApplicantID",userid );
      console.log(localStorage.getItem("getApplicantID"));
      alert("Data saved/updated successfully:");
      window.location.href = "/ADMIN/temp_st.html";
    })
    .catch((error) => {
      console.error(error);
      alert("Error saving/updating data please try again");
    });
}
