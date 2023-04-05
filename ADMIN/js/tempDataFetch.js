
function tempDataFetch() {
  const urlParams = new URLSearchParams(window.location.search);
  let applicant_id = urlParams.get('id'); 
     if (applicant_id === null)
     {
      
      console.log(localStorage.getItem("getApplicantID"));
      applicant_id = localStorage.getItem("getApplicantID");

     }
     console.log('trying to get id you see')
     console.log(applicant_id)
    //  verifying login status 
    const token1 = localStorage.getItem("token");
      console.log("token working")
      if (token1 === null) {
          window.location.href = "/index.html"
      }
  
    fetch(`https://universa-api.onrender.com/student/temp/${applicant_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "token": localStorage.getItem('token'),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        let first_Name = document.getElementById("first_name")
        first_Name.innerText =  data.data.personal_info.first_name;
        let middle_Name = document.getElementById("middle_name")
        middle_Name.innerText =  data.data.personal_info.middle_name;
        let last_Name = document.getElementById("last_name")
        last_Name.innerText =  data.data.personal_info.last_name;
        let Email = document.getElementById("email");
        Email.innerText = data.data.personal_info.email;
        let contactNo = document.getElementById("contact");
        contactNo.innerText = data.data.personal_info.contact;
        let Gender = document.getElementById("gender");
        Gender.innerText = data.data.personal_info.gender;
        
        // check if DOB is null or not before setting innerText of Dob element
        let Dob = document.getElementById("dob");
        if(data.data.personal_info.dob === null){
          Dob.innerText = "Please Update";
        } else {
          let DOB = new Date(data.data.personal_info.dob)
          Dob.innerText = `${DOB.getDate()}/${DOB.getMonth()+1}/${DOB.getFullYear()}`;
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
          // Academic Info
        let admissionYear = document.getElementById("admission_year")
        admissionYear.innerText = data.data.course_info.admission_year;
        let courseName = document.getElementById("course_name")
        courseName.innerText = data.data.course_info.course_name;
        let courseDuration = document.getElementById("course_duration")
        courseDuration.innerText = data.data.course_info.duration;
        let Stream = document.getElementById("stream")
        Stream.innerText = data.data.course_info.stream;
        let EnrollmentNo = document.getElementById("enrollment_number")
        EnrollmentNo.innerText = data.data.course_info.enrollment_number;
      })
      .catch((error) => console.error(error));
      console.log('bruh')
  }  
  