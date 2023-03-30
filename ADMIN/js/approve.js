
function approve(){
      // name
    const firstName = document.getElementById("first_name").value;
    const middleName = document.getElementById("middle_name").value;
    const lastName = document.getElementById("last_name").value;
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
    const blood_Groop = document.getElementById(
      "blood_group"
    ).value;
    const Category = document.getElementById("category").value;
    const Email = document.getElementById("email").value;
    const Contact = document.getElementById("contact").value;
  // Academic Info
  const Admission_Year = document.getElementById("admission_year").value;
  const Course_Name = document.getElementById("course_name").value;
  const Course_Duration = document.getElementById("course_duration").value;
  const Stream = document.getElementById("stream").value;
  userID = localStorage.getItem("GotoPreview")
  console.log(userID)
    
      const userdata= {
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
          enrollment_number: `${userID}`,
          admission_year: Admission_Year,
          course_name: Course_Name,
          duration: Course_Duration,
          stream: Stream,
          //  registration_number: Registration_Number,
        },

    }
    fetch(`https://universa-api.onrender.com/student/`, {
          // include user_id in the URL
          method: "POST",
          body:JSON.stringify(userdata),
          headers: {
            "Content-Type": "application/json",
            "token": localStorage.getItem('token')
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            alert("Student Created")
          }
     ).catch(error=>console.log(error))}