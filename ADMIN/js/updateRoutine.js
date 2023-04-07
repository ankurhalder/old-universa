function updateRoutine() {
  const token1 = localStorage.getItem("token");
  console.log("token working");
  if (token1 === null) {
    window.location.href = "/index.html";
  }

  // main thing's for Routine
  const yearSelect = document.getElementById("select-year");
  const streamSelect = document.getElementById("select-stream");
  const sectionSelect = document.getElementById("select-section");

  localStorage.setItem("routine_year", yearSelect.value);
  localStorage.setItem("stream_year", streamSelect.value);
  localStorage.setItem("section_year", sectionSelect.value);

  // Monday
  const mondayPeriod1Input = document.getElementById("monday-period-1");
  const mondayPeriod1FacultyInput = document.getElementById(
    "faculty-monday-period-1"
  );
  const mondayPeriod1RoomNoInput = document.getElementById(
    "roomno-monday-period-1"
  );

  const mondayPeriod2Input = document.getElementById("monday-period-2");
  const mondayPeriod2FacultyInput = document.getElementById(
    "faculty-monday-period-2"
  );
  const mondayPeriod2RoomNoInput = document.getElementById(
    "roomno-monday-period-2"
  );

  const mondayPeriod3Input = document.getElementById("monday-period-3");
  const mondayPeriod3FacultyInput = document.getElementById(
    "faculty-monday-period-3"
  );
  const mondayPeriod3RoomNoInput = document.getElementById(
    "roomno-monday-period-3"
  );

  // const mondayPeriod4Input = document.getElementById("monday-period-4");
  // const mondayPeriod4FacultyInput = document.getElementById("faculty-monday-period-4");
  // const mondayPeriod4RoomNoInput = document.getElementById("roomno-monday-period-4");

  const mondayPeriod5Input = document.getElementById("monday-period-5");
  const mondayPeriod5FacultyInput = document.getElementById(
    "faculty-monday-period-5"
  );
  const mondayPeriod5RoomNoInput = document.getElementById(
    "roomno-monday-period-5"
  );

  const mondayPeriod6Input = document.getElementById("monday-period-6");
  const mondayPeriod6FacultyInput = document.getElementById(
    "faculty-monday-period-6"
  );
  const mondayPeriod6RoomNoInput = document.getElementById(
    "roomno-monday-period-6"
  );

  const mondayPeriod7Input = document.getElementById("monday-period-7");
  const mondayPeriod7FacultyInput = document.getElementById(
    "faculty-monday-period-7"
  );
  const mondayPeriod7RoomNoInput = document.getElementById(
    "roomno-monday-period-7"
  );

  const mondayPeriod8Input = document.getElementById("monday-period-8");
  const mondayPeriod8FacultyInput = document.getElementById(
    "faculty-monday-period-8"
  );
  const mondayPeriod8RoomNoInput = document.getElementById(
    "roomno-monday-period-8"
  );
  // tuesday
  const tuesdayPeriod1Input = document.getElementById("tuesday-period-1");
  const tuesdayPeriod1FacultyInput = document.getElementById(
    "faculty-tuesday-period-1"
  );
  const tuesdayPeriod1RoomNoInput = document.getElementById(
    "roomno-tuesday-period-1"
  );

  const tuesdayPeriod2Input = document.getElementById("tuesday-period-2");
  const tuesdayPeriod2FacultyInput = document.getElementById(
    "faculty-tuesday-period-2"
  );
  const tuesdayPeriod2RoomNoInput = document.getElementById(
    "roomno-tuesday-period-2"
  );

  const tuesdayPeriod3Input = document.getElementById("tuesday-period-3");
  const tuesdayPeriod3FacultyInput = document.getElementById(
    "faculty-tuesday-period-3"
  );
  const tuesdayPeriod3RoomNoInput = document.getElementById(
    "roomno-tuesday-period-3"
  );

  // const tuesdayPeriod4Input = document.getElementById("tuesday-period-4");
  // const tuesdayPeriod4FacultyInput = document.getElementById("faculty-tuesday-period-4");
  // const tuesdayPeriod4RoomNoInput = document.getElementById("roomno-tuesday-period-4");

  const tuesdayPeriod5Input = document.getElementById("tuesday-period-5");
  const tuesdayPeriod5FacultyInput = document.getElementById(
    "faculty-tuesday-period-5"
  );
  const tuesdayPeriod5RoomNoInput = document.getElementById(
    "roomno-tuesday-period-5"
  );

  const tuesdayPeriod6Input = document.getElementById("tuesday-period-6");
  const tuesdayPeriod6FacultyInput = document.getElementById(
    "faculty-tuesday-period-6"
  );
  const tuesdayPeriod6RoomNoInput = document.getElementById(
    "roomno-tuesday-period-6"
  );

  const tuesdayPeriod7Input = document.getElementById("tuesday-period-7");
  const tuesdayPeriod7FacultyInput = document.getElementById(
    "faculty-tuesday-period-7"
  );
  const tuesdayPeriod7RoomNoInput = document.getElementById(
    "roomno-tuesday-period-7"
  );

  const tuesdayPeriod8Input = document.getElementById("tuesday-period-8");
  const tuesdayPeriod8FacultyInput = document.getElementById(
    "faculty-tuesday-period-8"
  );
  const tuesdayPeriod8RoomNoInput = document.getElementById(
    "roomno-tuesday-period-8"
  );
  // wednesday
  // Wednesday
  const wednesdayPeriod1Input = document.getElementById("wednesday-period-1");
  const wednesdayPeriod1FacultyInput = document.getElementById(
    "faculty-wednesday-period-1"
  );
  const wednesdayPeriod1RoomNoInput = document.getElementById(
    "roomno-wednesday-period-1"
  );

  const wednesdayPeriod2Input = document.getElementById("wednesday-period-2");
  const wednesdayPeriod2FacultyInput = document.getElementById(
    "faculty-wednesday-period-2"
  );
  const wednesdayPeriod2RoomNoInput = document.getElementById(
    "roomno-wednesday-period-2"
  );

  const wednesdayPeriod3Input = document.getElementById("wednesday-period-3");
  const wednesdayPeriod3FacultyInput = document.getElementById(
    "faculty-wednesday-period-3"
  );
  const wednesdayPeriod3RoomNoInput = document.getElementById(
    "roomno-wednesday-period-3"
  );

  // const wednesdayPeriod4Input = document.getElementById("wednesday-period-4");
  // const wednesdayPeriod4FacultyInput = document.getElementById("faculty-wednesday-period-4");
  // const wednesdayPeriod4RoomNoInput = document.getElementById("roomno-wednesday-period-4");

  const wednesdayPeriod5Input = document.getElementById("wednesday-period-5");
  const wednesdayPeriod5FacultyInput = document.getElementById(
    "faculty-wednesday-period-5"
  );
  const wednesdayPeriod5RoomNoInput = document.getElementById(
    "roomno-wednesday-period-5"
  );

  const wednesdayPeriod6Input = document.getElementById("wednesday-period-6");
  const wednesdayPeriod6FacultyInput = document.getElementById(
    "faculty-wednesday-period-6"
  );
  const wednesdayPeriod6RoomNoInput = document.getElementById(
    "roomno-wednesday-period-6"
  );

  const wednesdayPeriod7Input = document.getElementById("wednesday-period-7");
  const wednesdayPeriod7FacultyInput = document.getElementById(
    "faculty-wednesday-period-7"
  );
  const wednesdayPeriod7RoomNoInput = document.getElementById(
    "roomno-wednesday-period-7"
  );

  const wednesdayPeriod8Input = document.getElementById("wednesday-period-8");
  const wednesdayPeriod8FacultyInput = document.getElementById(
    "faculty-wednesday-period-8"
  );
  const wednesdayPeriod8RoomNoInput = document.getElementById(
    "roomno-wednesday-period-8"
  );
  // Thursday
  const thursdayPeriod1Input = document.getElementById("thursday-period-1");
  const thursdayPeriod1FacultyInput = document.getElementById(
    "faculty-thursday-period-1"
  );
  const thursdayPeriod1RoomNoInput = document.getElementById(
    "roomno-thursday-period-1"
  );

  const thursdayPeriod2Input = document.getElementById("thursday-period-2");
  const thursdayPeriod2FacultyInput = document.getElementById(
    "faculty-thursday-period-2"
  );
  const thursdayPeriod2RoomNoInput = document.getElementById(
    "roomno-thursday-period-2"
  );

  const thursdayPeriod3Input = document.getElementById("thursday-period-3");
  const thursdayPeriod3FacultyInput = document.getElementById(
    "faculty-thursday-period-3"
  );
  const thursdayPeriod3RoomNoInput = document.getElementById(
    "roomno-thursday-period-3"
  );

  // const thursdayPeriod4Input = document.getElementById("thursday-period-4");
  // const thursdayPeriod4FacultyInput = document.getElementById("faculty-thursday-period-4");
  // const thursdayPeriod4RoomNoInput = document.getElementById("roomno-thursday-period-4");

  const thursdayPeriod5Input = document.getElementById("thursday-period-5");
  const thursdayPeriod5FacultyInput = document.getElementById(
    "faculty-thursday-period-5"
  );
  const thursdayPeriod5RoomNoInput = document.getElementById(
    "roomno-thursday-period-5"
  );

  const thursdayPeriod6Input = document.getElementById("thursday-period-6");
  const thursdayPeriod6FacultyInput = document.getElementById(
    "faculty-thursday-period-6"
  );
  const thursdayPeriod6RoomNoInput = document.getElementById(
    "roomno-thursday-period-6"
  );

  const thursdayPeriod7Input = document.getElementById("thursday-period-7");
  const thursdayPeriod7FacultyInput = document.getElementById(
    "faculty-thursday-period-7"
  );
  const thursdayPeriod7RoomNoInput = document.getElementById(
    "roomno-thursday-period-7"
  );

  const thursdayPeriod8Input = document.getElementById("thursday-period-8");
  const thursdayPeriod8FacultyInput = document.getElementById(
    "faculty-thursday-period-8"
  );
  const thursdayPeriod8RoomNoInput = document.getElementById(
    "roomno-thursday-period-8"
  );
  // friday
  const fridayPeriod1Input = document.getElementById("friday-period-1");
  const fridayPeriod1FacultyInput = document.getElementById(
    "faculty-friday-period-1"
  );
  const fridayPeriod1RoomNoInput = document.getElementById(
    "roomno-friday-period-1"
  );

  const fridayPeriod2Input = document.getElementById("friday-period-2");
  const fridayPeriod2FacultyInput = document.getElementById(
    "faculty-friday-period-2"
  );
  const fridayPeriod2RoomNoInput = document.getElementById(
    "roomno-friday-period-2"
  );

  const fridayPeriod3Input = document.getElementById("friday-period-3");
  const fridayPeriod3FacultyInput = document.getElementById(
    "faculty-friday-period-3"
  );
  const fridayPeriod3RoomNoInput = document.getElementById(
    "roomno-friday-period-3"
  );

  // const fridayPeriod4Input = document.getElementById("friday-period-4");
  // const fridayPeriod4FacultyInput = document.getElementById("faculty-friday-period-4");
  // const fridayPeriod4RoomNoInput = document.getElementById("roomno-friday-period-4");

  const fridayPeriod5Input = document.getElementById("friday-period-5");
  const fridayPeriod5FacultyInput = document.getElementById(
    "faculty-friday-period-5"
  );
  const fridayPeriod5RoomNoInput = document.getElementById(
    "roomno-friday-period-5"
  );

  const fridayPeriod6Input = document.getElementById("friday-period-6");
  const fridayPeriod6FacultyInput = document.getElementById(
    "faculty-friday-period-6"
  );
  const fridayPeriod6RoomNoInput = document.getElementById(
    "roomno-friday-period-6"
  );

  const fridayPeriod7Input = document.getElementById("friday-period-7");
  const fridayPeriod7FacultyInput = document.getElementById(
    "faculty-friday-period-7"
  );
  const fridayPeriod7RoomNoInput = document.getElementById(
    "roomno-friday-period-7"
  );

  const fridayPeriod8Input = document.getElementById("friday-period-8");
  const fridayPeriod8FacultyInput = document.getElementById(
    "faculty-friday-period-8"
  );
  const fridayPeriod8RoomNoInput = document.getElementById(
    "roomno-friday-period-8"
  );

  let hello = {
    year: yearSelect.value,
    stream: streamSelect.value,
    section: sectionSelect.value,
    routine_data: [
      {
        day: "monday",
        periods: [
          {
            // Monday - period 1
            subject: mondayPeriod1Input.value,
            // start: "9:30",
            // end: "10:25",
            room: mondayPeriod1RoomNoInput.value,
            faculty: [
              {
                faculty_id: "123456",
                faculty_name: mondayPeriod1FacultyInput.value,
              },
            ],
          },
          {
            // Monday - period 2
            subject: mondayPeriod2Input.value,
            // start: "10:30",
            // end: "11:25",
            room: mondayPeriod2RoomNoInput.value,
            faculty: [
              {
                faculty_id: "234567",
                faculty_name: mondayPeriod2FacultyInput.value,
              },
            ],
          },
          {
            // Monday - period 3
            subject: mondayPeriod3Input.value,
            // start: "11:30",
            // end: "12:25",
            room: mondayPeriod3RoomNoInput.value,
            faculty: [
              {
                faculty_id: "345678",
                faculty_name: mondayPeriod3FacultyInput.value,
              },
            ],
          },
          // {
          //   // Monday - period 4
          //   subject: mondayPeriod4Input.value,
          //   start: "1:30",
          //   end: "2:25",
          //   room: mondayPeriod4RoomNoInput.value,
          //   faculty: [
          //     {
          //       faculty_id: "456789",
          //       faculty_name: mondayPeriod4FacultyInput.value,
          //     },
          //   ],
          // },
          {
            // Monday - period 5
            subject: mondayPeriod5Input.value,
            // start: "2:30",
            // end: "3:25",
            room: mondayPeriod5RoomNoInput.value,
            faculty: [
              {
                faculty_id: "567890",
                faculty_name: mondayPeriod5FacultyInput.value,
              },
            ],
          },
          {
            // Monday - period 6
            subject: mondayPeriod6Input.value,
            // start: "3:30",
            // end: "4:25",
            room: mondayPeriod6RoomNoInput.value,
            faculty: [
              {
                faculty_id: "678901",
                faculty_name: mondayPeriod6FacultyInput.value,
              },
            ],
          },
          {
            // Monday - period 7
            subject: mondayPeriod7Input.value,
            // start: "4:30",
            // end: "5:25",
            room: mondayPeriod7RoomNoInput.value,
            faculty: [
              {
                faculty_id: "789012",
                faculty_name: mondayPeriod7FacultyInput.value,
              },
            ],
          },
          {
            // Monday - period 8
            subject: mondayPeriod8Input.value,
            // start: "5:30",
            // end: "6:25",
            room: mondayPeriod8RoomNoInput.value,
            faculty: [
              {
                faculty_id: "890123",
                faculty_name: mondayPeriod8FacultyInput.value,
              },
            ],
          },
        ],
      },
      {
        day: "tuesday",
        periods: [
          {
            // Tuesday - period 1
            subject: tuesdayPeriod1Input.value,
            // start: "9:30",
            // end: "10:25",
            room: tuesdayPeriod1RoomNoInput.value,
            faculty: [
              {
                faculty_id: "123456",
                faculty_name: tuesdayPeriod1FacultyInput.value,
              },
            ],
          },
          {
            // Tuesday - period 2
            subject: tuesdayPeriod2Input.value,
            // start: "10:30",
            // end: "11:25",
            room: tuesdayPeriod2RoomNoInput.value,
            faculty: [
              {
                faculty_id: "234567",
                faculty_name: tuesdayPeriod2FacultyInput.value,
              },
            ],
          },
          {
            // Tuesday - period 3
            subject: tuesdayPeriod3Input.value,
            // start: "11:30",
            // end: "12:25",
            room: tuesdayPeriod3RoomNoInput.value,
            faculty: [
              {
                faculty_id: "345678",
                faculty_name: tuesdayPeriod3FacultyInput.value,
              },
            ],
          },
          // {
          //   // Tuesday - period 4
          //   subject: tuesdayPeriod4Input.value,
          //   start: "1:30",
          //   end: "2:25",
          //   room: tuesdayPeriod4RoomNoInput.value,
          //   faculty: [
          //     {
          //       faculty_id: "456789",
          //       faculty_name: tuesdayPeriod4FacultyInput.value,
          //     },
          //   ],
          // },
          {
            // Tuesday - period 5
            subject: tuesdayPeriod5Input.value,
            // start: "2:30",
            // end: "3:25",
            room: tuesdayPeriod5RoomNoInput.value,
            faculty: [
              {
                faculty_id: "567890",
                faculty_name: tuesdayPeriod5FacultyInput.value,
              },
            ],
          },
          {
            // Tuesday - period 6
            subject: tuesdayPeriod6Input.value,
            // start: "3:30",
            // end: "4:25",
            room: tuesdayPeriod6RoomNoInput.value,
            faculty: [
              {
                faculty_id: "678901",
                faculty_name: tuesdayPeriod6FacultyInput.value,
              },
            ],
          },
          {
            // Tuesday - period 7
            subject: tuesdayPeriod7Input.value,
            // start: "4:30",
            // end: "5:25",
            room: tuesdayPeriod7RoomNoInput.value,
            faculty: [
              {
                faculty_id: "789012",
                faculty_name: tuesdayPeriod7FacultyInput.value,
              },
            ],
          },
          {
            // Tuesday - period 8
            subject: tuesdayPeriod8Input.value,
            // start: "5:30",
            // end: "6:25",
            room: tuesdayPeriod8RoomNoInput.value,
            faculty: [
              {
                faculty_id: "890123",
                faculty_name: tuesdayPeriod8FacultyInput.value,
              },
            ],
          },
        ],
      },
      {
        day: "wednesday",
        periods: [
          {
            // Wednesday - period 1
            subject: wednesdayPeriod1Input.value,
            // start: "9:30",
            // end: "10:25",
            room: wednesdayPeriod1RoomNoInput.value,
            faculty: [
              {
                faculty_id: "123456",
                faculty_name: wednesdayPeriod1FacultyInput.value,
              },
            ],
          },
          {
            // Wednesday - period 2
            subject: wednesdayPeriod2Input.value,
            // start: "10:30",
            // end: "11:25",
            room: wednesdayPeriod2RoomNoInput.value,
            faculty: [
              {
                faculty_id: "234567",
                faculty_name: wednesdayPeriod2FacultyInput.value,
              },
            ],
          },
          {
            // Wednesday - period 3
            subject: wednesdayPeriod3Input.value,
            // start: "11:30",
            // end: "12:25",
            room: wednesdayPeriod3RoomNoInput.value,
            faculty: [
              {
                faculty_id: "345678",
                faculty_name: wednesdayPeriod3FacultyInput.value,
              },
            ],
          },
          // {
          //   // Wednesday - period 4
          //   subject: wednesdayPeriod4Input.value,
          //   start: "1:30",
          //   end: "2:25",
          //   room: wednesdayPeriod4RoomNoInput.value,
          //   faculty: [
          //     {
          //       faculty_id: "456789",
          //       faculty_name: wednesdayPeriod4FacultyInput.value,
          //     },
          //   ],
          // },
          {
            // Wednesday - period 5
            subject: wednesdayPeriod5Input.value,
            // start: "2:30",
            // end: "3:25",
            room: wednesdayPeriod5RoomNoInput.value,
            faculty: [
              {
                faculty_id: "567890",
                faculty_name: wednesdayPeriod5FacultyInput.value,
              },
            ],
          },
          {
            // Wednesday - period 6
            subject: wednesdayPeriod6Input.value,
            // start: "3:30",
            // end: "4:25",
            room: wednesdayPeriod6RoomNoInput.value,
            faculty: [
              {
                faculty_id: "678901",
                faculty_name: wednesdayPeriod6FacultyInput.value,
              },
            ],
          },
          {
            // Wednesday - period 7
            subject: wednesdayPeriod7Input.value,
            // start: "4:30",
            // end: "5:25",
            room: wednesdayPeriod7RoomNoInput.value,
            faculty: [
              {
                faculty_id: "789012",
                faculty_name: wednesdayPeriod7FacultyInput.value,
              },
            ],
          },
          {
            // Wednesday - period 8
            subject: wednesdayPeriod8Input.value,
            // start: "5:30",
            // end: "6:25",
            room: wednesdayPeriod8RoomNoInput.value,
            faculty: [
              {
                faculty_id: "890123",
                faculty_name: wednesdayPeriod8FacultyInput.value,
              },
            ],
          },
        ],
      },
      {
        day: "thursday",
        periods: [
          {
            // Thursday - period 1
            subject: thursdayPeriod1Input.value,
            // start: "9:30",
            // end: "10:25",
            room: thursdayPeriod1RoomNoInput.value,
            faculty: [
              {
                faculty_id: "123456",
                faculty_name: thursdayPeriod1FacultyInput.value,
              },
            ],
          },
          {
            // Thursday - period 2
            subject: thursdayPeriod2Input.value,
            // start: "10:30",
            // end: "11:25",
            room: thursdayPeriod2RoomNoInput.value,
            faculty: [
              {
                faculty_id: "234567",
                faculty_name: thursdayPeriod2FacultyInput.value,
              },
            ],
          },
          {
            // Thursday - period 3
            subject: thursdayPeriod3Input.value,
            // start: "11:30",
            // end: "12:25",
            room: thursdayPeriod3RoomNoInput.value,
            faculty: [
              {
                faculty_id: "345678",
                faculty_name: thursdayPeriod3FacultyInput.value,
              },
            ],
          },
          // {
          //   // Thursday - period 4
          //   subject: thursdayPeriod4Input.value,
          //   start: "1:30",
          //   end: "2:25",
          //   room: thursdayPeriod4RoomNoInput.value,
          //   faculty: [
          //     {
          //       faculty_id: "456789",
          //       faculty_name: thursdayPeriod4FacultyInput.value,
          //     },
          //   ],
          // },
          {
            // Thursday - period 5
            subject: thursdayPeriod5Input.value,
            // start: "2:30",
            // end: "3:25",
            room: thursdayPeriod5RoomNoInput.value,
            faculty: [
              {
                faculty_id: "567890",
                faculty_name: thursdayPeriod5FacultyInput.value,
              },
            ],
          },
          {
            // Thursday - period 6
            subject: thursdayPeriod6Input.value,
            // start: "3:30",
            // end: "4:25",
            room: thursdayPeriod6RoomNoInput.value,
            faculty: [
              {
                faculty_id: "678901",
                faculty_name: thursdayPeriod6FacultyInput.value,
              },
            ],
          },
          {
            // Thursday - period 7
            subject: thursdayPeriod7Input.value,
            // start: "4:30",
            // end: "5:25",
            room: thursdayPeriod7RoomNoInput.value,
            faculty: [
              {
                faculty_id: "789012",
                faculty_name: thursdayPeriod7FacultyInput.value,
              },
            ],
          },
          {
            // Thursday - period 8
            subject: thursdayPeriod8Input.value,
            // start: "5:30",
            // end: "6:25",
            room: thursdayPeriod8RoomNoInput.value,
            faculty: [
              {
                faculty_id: "890123",
                faculty_name: thursdayPeriod8FacultyInput.value,
              },
            ],
          },
        ],
      },
      {
        day: "friday",
        periods: [
          {
            // Friday - period 1
            subject: fridayPeriod1Input.value,
            // start: "9:30",
            // end: "10:25",
            room: fridayPeriod1RoomNoInput.value,
            faculty: [
              {
                faculty_id: "123456",
                faculty_name: fridayPeriod1FacultyInput.value,
              },
            ],
          },
          {
            // Friday - period 2
            subject: fridayPeriod2Input.value,
            // start: "10:30",
            // end: "11:25",
            room: fridayPeriod2RoomNoInput.value,
            faculty: [
              {
                faculty_id: "234567",
                faculty_name: fridayPeriod2FacultyInput.value,
              },
            ],
          },
          {
            // Friday - period 3
            subject: fridayPeriod3Input.value,
            // start: "11:30",
            // end: "12:25",
            room: fridayPeriod3RoomNoInput.value,
            faculty: [
              {
                faculty_id: "345678",
                faculty_name: fridayPeriod3FacultyInput.value,
              },
            ],
          },
          // {
          //   // Friday - period 4
          //   subject: fridayPeriod4Input.value,
          //   start: "1:30",
          //   end: "2:25",
          //   room: fridayPeriod4RoomNoInput.value,
          //   faculty: [
          //     {
          //       faculty_id: "456789",
          //       faculty_name: fridayPeriod4FacultyInput.value,
          //     },
          //   ],
          // },
          {
            // Friday - period 5
            subject: fridayPeriod5Input.value,
            // start: "2:30",
            // end: "3:25",
            room: fridayPeriod5RoomNoInput.value,
            faculty: [
              {
                faculty_id: "567890",
                faculty_name: fridayPeriod5FacultyInput.value,
              },
            ],
          },
          {
            // Friday - period 6
            subject: fridayPeriod6Input.value,
            // start: "3:30",
            // end: "4:25",
            room: fridayPeriod6RoomNoInput.value,
            faculty: [
              {
                faculty_id: "678901",
                faculty_name: fridayPeriod6FacultyInput.value,
              },
            ],
          },
          {
            // Friday - period 7
            subject: fridayPeriod7Input.value,
            // start: "4:30",
            // end: "5:25",
            room: fridayPeriod7RoomNoInput.value,
            faculty: [
              {
                faculty_id: "789012",
                faculty_name: fridayPeriod7FacultyInput.value,
              },
            ],
          },
          {
            // Friday - period 8
            subject: fridayPeriod8Input.value,
            // start: "5:30",
            // end: "6:25",
            room: fridayPeriod8RoomNoInput.value,
            faculty: [
              {
                faculty_id: "890123",
                faculty_name: fridayPeriod8FacultyInput.value,
              },
            ],
          },
        ],
      },
    ],
  };
  fetch(`https://universa-api.onrender.com/routine`, {
    // include user_id in the URL
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "token": localStorage.getItem("token"),
    },
    body: JSON.stringify(hello),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error(error));
}
