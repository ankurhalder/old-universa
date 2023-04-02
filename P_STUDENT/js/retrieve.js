function retrieve() {
  console.log('test')
  const userId = localStorage.getItem("loginUserId");
    const verify = localStorage.getItem("token");
    if (verify === null) {
      window.location.href = "/index.html"
    }

    const creatingQr = {
      type: "id-card",
      data: {
        identity_token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzI3NDEyNTg5NjM1NjAzMCIsImVtYWlsIjoiYW5rdXIuY2xvdWRzdG81NHJhZ2VAZ21haWwuY29tIiwiaWF0IjoxNjgwMjUxNDQ4fQ.9Tq9BXK5xZkFNm05Re5Pm_bXxDjIuDUwsmZ985Mbi-g'
      }
    }
    document.getElementById('idcard_qrcode').src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${JSON.stringify(creatingQr)}`
    // retrieve user_id from local storage
    fetch(`https://universa-api.onrender.com/student/${userId}`, {
      // include user_id in the URL
      method: "GET",
      headers: {
        "token": verify,
        "Content-Type": "application/json"
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        let first_name_db = document.getElementById("full_name");
        first_name_db.innerText =
          data.data.personal_info.first_name +
          " " +
          data.data.personal_info.last_name;
          let User_Name_Dashboard = document.getElementById("dashboard");
          User_Name_Dashboard.innerText =
            data.data.personal_info.first_name +`'s DASHBOARD`
        // let Email = document.getElementById("email");
        // Email.innerText = data.data.personal_info.email;
        let contactNo = document.getElementById("contact_no");
        contactNo.innerText = data.data.personal_info.contact;
        // let Gender = document.getElementById("gender");
        // Gender.innerText = data.data.personal_info.gender; 
        // check if DOB is null or not before setting innerText of Dob element
        let Dob = document.getElementById("dob");
        if(data.data.personal_info.dob === null){
          Dob.innerText = "Please Update";
        } else {
          let DOB = new Date(data.data.personal_info.dob)
          Dob.innerText = `${DOB.getDate()}/${DOB.getMonth()+1}/${DOB.getFullYear()}`;
        }
        // let Category = document.getElementById("category");
        // Category.innerText = data.data.personal_info.category;
        let blood_Groop = document.getElementById("blood_group");
        blood_Groop.innerText = data.data.personal_info.blood_group;
      //   let admissionYear = document.getElementById('admission_year');
      //   admissionYear.innerText = data.data.course_info.admission_year;
      //  let courseName = document.getElementById('course_name');
      //   courseName.innerText = data.data.course_info.course_name;
      //  let CourseDuration = document.getElementById('course_duration');
      //   CourseDuration.innerText = data.data.course_info.duration;
       let stream = document.getElementById('stream');
        stream.innerText = data.data.course_info.stream;
       let registrationNumber = document.getElementById('enrollment_number');
        registrationNumber.innerText = data.data.course_info.enrollment_number;
      })
      .catch((error) => console.error(error));
  } 