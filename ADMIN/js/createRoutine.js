
function createRoutine() {
    const userId = localStorage.getItem("userId");
    if(userId === null){
    //   window.location.href = "/index.html"
    }
    // retrieve user_id from local storage
    console.log(7563975692387)

    let hello = {
        year: "2",
        stream: "cst",
        section: "d",
        routine_data: [
          {
            day: "monday",
            periods: [
              {
                subject: "AIML Lab",
                start: "9:30",
                end: "10:25",
                room: "ccfl-iii",
                faculty: [
                  {
                    faculty_id: "123456",
                    faculty_name: "che"
                  },
                  {
                    faculty_id: "456789",
                    faculty_name: "sdc"
                  }]
              },   
              ]
          }]
      }
    fetch(`https://universa-api.onrender.com/routine`, {
      // include user_id in the URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "token": localStorage.getItem('token')
      },
      body:JSON.stringify(hello)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
    })
      .catch((error) => console.error(error));
  } 
