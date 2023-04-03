
function createRoutine() {
  // main thing's for Routine 
   const yearSelect = document.getElementById("select-year");
   const streamSelect = document.getElementById("select-stream");
   const sectionSelect = document.getElementById("select-section");


   const monday_period_1 =  document.getElementById("monday-period-1");
    let hello = {
        year: yearSelect.value,
        stream: streamSelect.value,
        section: sectionSelect.value,
        routine_data: [
          {
            day: "monday",
            // the periods should be in ascending order
            periods: [
              {
                subject: "AIMLjajaja Lab",
                start: "9:30",
                end: "10:25",
                room: "ccfl-iii",
                faculty: [
                  {
                    faculty_id: "123456",
                    faculty_name: "che",
                  },
                  {
                    faculty_id: "456789",
                    faculty_name: "sdc",
                  },
                ],
              },
            ],
          },
          {
            day: "tuesday",
            // the periods should be in ascending order
            periods: [
              {
                subject: "AIML Lab",
                start: "9:30",
                end: "10:25",
                room: "ccfl-iii",
                faculty: [
                  {
                    faculty_id: "123456",
                    faculty_name: "che",
                  },
                  {
                    faculty_id: "456789",
                    faculty_name: "sdc",
                  },
                ],
              },
            ],
          },
          {
            day: "wednesday",
            // the periods should be in ascending order
            periods: [
              {
                subject: "AIML Lab",
                start: "9:30",
                end: "10:25",
                room: "ccfl-iii",
                faculty: [
                  {
                    faculty_id: "123456",
                    faculty_name: "che",
                  },
                  {
                    faculty_id: "456789",
                    faculty_name: "sdc",
                  },
                ],
              },
            ],
          },
          {
            day: "thursday",
            // the periods should be in ascending order
            periods: [
              {
                subject: "AIML Lab",
                start: "9:30",
                end: "10:25",
                room: "ccfl-iii",
                faculty: [
                  {
                    faculty_id: "123456",
                    faculty_name: "che",
                  },
                  {
                    faculty_id: "456789",
                    faculty_name: "sdc",
                  },
                ],
              },
            ],
          },
          {
            day: "friday",
            // the periods should be in ascending order
            periods: [
              {
                subject: "AIML Lab",
                start: "9:30",
                end: "10:25",
                room: "ccfl-iii",
                faculty: [
                  {
                    faculty_id: "123456",
                    faculty_name: "che",
                  },
                  {
                    faculty_id: "456789",
                    faculty_name: "sdc",
                  },
                ],
              },
            ],
          },
        ],
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
