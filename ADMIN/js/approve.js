function approve(){
      // name
    const firstName = document.getElementById("first_name").innerText;
    const middleName = document.getElementById("middle_name").innerText;
    const lastName = document.getElementById("last_name").innerText;
    //personal data
    const Gender = document.getElementById("gender").innerText;
    // address
    const presentAddress = document.getElementById("present_address").innerText;
    const presentPincode = document.getElementById("present_pincode").innerText;
    const presentCity = document.getElementById("present_city").innerText;
    const presentDistrict = document.getElementById("present_district").innerText;
    const presentState = document.getElementById("present_state").innerText;
    const permanentAddress = document.getElementById("permanent_address").innerText;
    const permanentPincode = document.getElementById("permanent_pincode").innerText;
    const permanentCity = document.getElementById("permanent_city").innerText;
    const permanentDistrict = document.getElementById("permanent_district").innerText;
    const permanentState = document.getElementById("permanent_state").innerText;
    const date_Of_Birth = document.getElementById("dob").innerText;
    const blood_Groop = document.getElementById("blood_group").innerText;
    const Category = document.getElementById("category").innerText;
    const Email = document.getElementById("email").innerText;
    const Contact = document.getElementById("contact").innerText;
  // Academic Info
  const Admission_Year = document.getElementById("admission_year").innerText;
  const Course_Name = document.getElementById("course_name").innerText;
  const Course_Duration = document.getElementById("course_duration").innerText;
  const Stream = document.getElementById("stream").innerText;
  userID = localStorage.getItem("userid")
  console.log(userID)
  console.log(firstName)
  console.log(Email)
      const userdata= {
        personal_info: {
          first_name: firstName,
          middle_name: middleName,
          last_name: lastName,
           dob: Date(date_Of_Birth),
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
            window.location.href = "/ADMIN/manage_applicats.html"
          }
     ).catch(error=>console.log(error))}