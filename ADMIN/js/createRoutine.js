
function createRoutine() {
  // main thing's for Routine 
   const yearSelect = document.getElementById("select-year");
   const streamSelect = document.getElementById("select-stream");
   const sectionSelect = document.getElementById("select-section");

// Monday
const mondayPeriod1Input = document.getElementById("monday-period-1");
const mondayPeriod1FacultyInput = document.getElementById("faculty-monday-period-1");
const mondayPeriod1RoomNoInput = document.getElementById("roomno-monday-period-1");

const mondayPeriod2Input = document.getElementById("monday-period-2");
const mondayPeriod2FacultyInput = document.getElementById("faculty-monday-period-2");
const mondayPeriod2RoomNoInput = document.getElementById("roomno-monday-period-2");

const mondayPeriod3Input = document.getElementById("monday-period-3");
const mondayPeriod3FacultyInput = document.getElementById("faculty-monday-period-3");
const mondayPeriod3RoomNoInput = document.getElementById("roomno-monday-period-3");

const mondayPeriod4Input = document.getElementById("monday-period-4");
const mondayPeriod4FacultyInput = document.getElementById("faculty-monday-period-4");
const mondayPeriod4RoomNoInput = document.getElementById("roomno-monday-period-4");

const mondayPeriod5Input = document.getElementById("monday-period-5");
const mondayPeriod5FacultyInput = document.getElementById("faculty-monday-period-5");
const mondayPeriod5RoomNoInput = document.getElementById("roomno-monday-period-5");

const mondayPeriod6Input = document.getElementById("monday-period-6");
const mondayPeriod6FacultyInput = document.getElementById("faculty-monday-period-6");
const mondayPeriod6RoomNoInput = document.getElementById("roomno-monday-period-6");

const mondayPeriod7Input = document.getElementById("monday-period-7");
const mondayPeriod7FacultyInput = document.getElementById("faculty-monday-period-7");
const mondayPeriod7RoomNoInput = document.getElementById("roomno-monday-period-7");

const mondayPeriod8Input = document.getElementById("monday-period-8");
const mondayPeriod8FacultyInput = document.getElementById("faculty-monday-period-8");
const mondayPeriod8RoomNoInput = document.getElementById("roomno-monday-period-8");

    let hello = {
        year: yearSelect.value,
        stream: streamSelect.value,
        section: sectionSelect.value,
        routine_data: [
          {
            day: "monday",
            // Monday - period -1
            periods: [
              {
                subject: mondayPeriod1Input.value,
                start: "9:30",
                end: "10:25",
                room: mondayPeriod1RoomNoInput.value,
                faculty: [
                  {
                    faculty_id: "123456",
                    faculty_name: mondayPeriod1FacultyInput.value,
                  },
                ],
              },
            ],
          },
          {
            day: "monday",
            // monday period -2
            periods: [
              {
                subject: mondayPeriod2Input.value,
                start: "10:35",
                end: "11:30",
                room: mondayPeriod2RoomNoInput.value,
                faculty: [
                  {
                    faculty_id: "123457",
                    faculty_name: mondayPeriod2FacultyInput.value,
                  },
                ],
              },
            ],
          },
          {
            day: "monday",
            // Monday period -3
            periods: [
              {
                subject: mondayPeriod3Input.value,
                start: "11:40",
                end: "12:35",
                room: mondayPeriod3RoomNoInput.value,
                faculty: [
                  {
                    faculty_id: "123458",
                    faculty_name: mondayPeriod3FacultyInput.value,
                  },
                ],
              },
            ],
          },
          // {
          //   day: "monday",
   
          //   periods: [
          //     {
          //       subject: mondayPeriod4Input.value,
          //       start: "1:30",
          //       end: "2:25",
          //       room: mondayPeriod4RoomNoInput.value,
          //       faculty: [
          //         {
          //           faculty_id: "123459",
          //           faculty_name: mondayPeriod4FacultyInput.value,
          //         },
          //       ],
          //     },
          //   ],
          // },
          {
            day: "monday",
            // Monday period 5
            periods: [
              {
                subject: mondayPeriod5Input.value,
                start: "2:35",
                end: "3:30",
                room: mondayPeriod5RoomNoInput.value,
                faculty: [
                  {
                    faculty_id: "123460",
                    faculty_name: mondayPeriod5FacultyInput.value,
                  },
                ],
              },
            ],
          },
          {
            day: "monday",
            // Monday period 6
            periods: [
              {
                subject: mondayPeriod6Input.value,
                start: "3:40",
                end: "4:35",
                room: mondayPeriod6RoomNoInput.value,
                faculty: [
                  {
                    faculty_id: "123461",
                    faculty_name: mondayPeriod6FacultyInput.value,
                  },
                ],
              },
            ],
          },
          {
            day: "monday",
            // Monday period 7
            periods: [
              {
                subject: mondayPeriod7Input.value,
                start: "4:45",
                end: "5:40",
                room: mondayPeriod7RoomNoInput.value,
                faculty: [
                  {
                    faculty_id: "123462",
                    faculty_name: mondayPeriod7FacultyInput.value,
                  },
                ],
              },
            ],
          },
          {
            day: "monday",
            // Monday period 8
            periods: [
              {
                subject: mondayPeriod8Input.value,
                start: "5:50",
                end: "6:45",
                room: mondayPeriod8RoomNoInput.value,
                faculty: [
                  {
                    faculty_id: "123463",
                    faculty_name: mondayPeriod8FacultyInput.value,
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
