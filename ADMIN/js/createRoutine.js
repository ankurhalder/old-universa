const yearSelect = document.getElementById("year-select");

yearSelect.addEventListener("input", function() {
  const selectedYear = this.value;
  console.log("Selected year:", selectedYear);
  // do something with the selected year
});
function createRoutine() { 
   const monday_period_1 =  document.getElementById("monday-period-1");
    let hello = {
        year: yearSelect.value,
        stream: "cst",
        section: "d",
        routine_data: [
          {
            day: "monday",
            periods: [
              {
                subject: monday_period_1.value,
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
// student year validation
      if (!checkStudentYear()) {
        console.log(yearSelect.value.length)
        alert("Please enter valid Student Year");
        return;
      }
      function checkStudentYear() {
        if (yearSelect.value.length === 4) {
          yearSelect.focus();
          return true;
        }
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
