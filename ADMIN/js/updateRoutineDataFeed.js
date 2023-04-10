function updateRoutineDataFeed() {
  const token1 = localStorage.getItem("token");
  console.log("token working");
  if (token1 === null) {
    window.location.href = "/index.html";
  }
  let year = document.getElementById("select-year").value;
  let stream = document.getElementById("select-stream").value;
  let section = document.getElementById("select-section").value;

  if (!year) {
    year = localStorage.getItem("routine_year");
  }
  if (!stream) {
    stream = localStorage.getItem("stream_year");
  }
  if (!section) {
    section = localStorage.getItem("section_year");
  }
  console.log(year);
  console.log(stream);
  console.log(section);
  fetch(`https://universa-api.onrender.com/routine/weekly?year=${year}&stream=${stream}&section=${section}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // period - 1
      // Monday
      let monday_period_1 = document.getElementById("monday-period-1");
      monday_period_1.value = data.data[0].subject;
      let faculty_monday_period_1 = document.getElementById("faculty-monday-period-1");
      faculty_monday_period_1.value = data.data[0].faculty.join(",");
      let roomno_monday_period_1 = document.getElementById("roomno-monday-period-1");
      roomno_monday_period_1.value = data.data[0].room;
      // Tuesday
      let tuesday_period_1 = document.getElementById("tuesday-period-1");
      tuesday_period_1.value = data.data[1].subject;
      let faculty_tuesday_period_1 = document.getElementById("faculty-tuesday-period-1");
      faculty_tuesday_period_1.value = data.data[1].faculty.join(",");
      let roomno_tuesday_period_1 = document.getElementById("roomno-tuesday-period-1");
      roomno_tuesday_period_1.value = data.data[1].room;
      // Wednesday
      let wednesday_period_1 = document.getElementById("wednesday-period-1");
      wednesday_period_1.value = data.data[2].subject;
      let faculty_wednesday_period_1 = document.getElementById("faculty-wednesday-period-1");
      faculty_wednesday_period_1.value = data.data[2].faculty.join(",");
      let roomno_wednesday_period_1 = document.getElementById("roomno-wednesday-period-1");
      roomno_wednesday_period_1.value = data.data[2].room;
      // Thursday
      let thursday_period_1 = document.getElementById("thursday-period-1");
      thursday_period_1.value = data.data[3].subject;
      let faculty_thursday_period_1 = document.getElementById("faculty-thursday-period-1");
      faculty_thursday_period_1.value = data.data[3].faculty.join(",");
      let roomno_thursday_period_1 = document.getElementById("roomno-thursday-period-1");
      roomno_thursday_period_1.value = data.data[3].room;

      // friday
      let friday_period_1 = document.getElementById("friday-period-1");
      friday_period_1.value = data.data[4].subject;
      let faculty_friday_period_1 = document.getElementById("faculty-friday-period-1");
      faculty_friday_period_1.value = data.data[4].faculty.join(",");
      let roomno_friday_period_1 = document.getElementById("roomno-friday-period-1");
      roomno_friday_period_1.value = data.data[4].room;

      // period - 2

      // Monday
      let monday_period_2 = document.getElementById("monday-period-2");
      monday_period_2.value = data.data[5].subject;
      let faculty_monday_period_2 = document.getElementById("faculty-monday-period-2");
      faculty_monday_period_2.value = data.data[5].faculty.join(",");
      let roomno_monday_period_2 = document.getElementById("roomno-monday-period-2");
      roomno_monday_period_2.value = data.data[5].room;
      // Tuesday
      let tuesday_period_2 = document.getElementById("tuesday-period-2");
      tuesday_period_2.value = data.data[6].subject;
      let faculty_tuesday_period_2 = document.getElementById("faculty-tuesday-period-2");
      faculty_tuesday_period_2.value = data.data[6].faculty.join(",");
      let roomno_tuesday_period_2 = document.getElementById("roomno-tuesday-period-2");
      roomno_tuesday_period_2.value = data.data[6].room;
      // Wednesday
      let wednesday_period_2 = document.getElementById("wednesday-period-2");
      wednesday_period_2.value = data.data[7].subject;
      let faculty_wednesday_period_2 = document.getElementById("faculty-wednesday-period-2");
      faculty_wednesday_period_2.value = data.data[7].faculty.join(",");
      let roomno_wednesday_period_2 = document.getElementById("roomno-wednesday-period-2");
      roomno_wednesday_period_2.value = data.data[7].room;
      // Thursday
      let thursday_period_2 = document.getElementById("thursday-period-2");
      thursday_period_2.value = data.data[8].subject;
      let faculty_thursday_period_2 = document.getElementById("faculty-thursday-period-2");
      faculty_thursday_period_2.value = data.data[8].faculty.join(",");
      let roomno_thursday_period_2 = document.getElementById("roomno-thursday-period-2");
      roomno_thursday_period_2.value = data.data[8].room;
      // Friday
      let friday_period_2 = document.getElementById("friday-period-2");
      friday_period_2.value = data.data[9].subject;
      let faculty_friday_period_2 = document.getElementById("faculty-friday-period-2");
      faculty_friday_period_2.value = data.data[9].faculty.join(",");
      let roomno_friday_period_2 = document.getElementById("roomno-friday-period-2");
      roomno_friday_period_2.value = data.data[9].room;
      // period - 3
      // Monday
      let monday_period_3 = document.getElementById("monday-period-3");
      monday_period_3.value = data.data[10].subject;
      let faculty_monday_period_3 = document.getElementById("faculty-monday-period-3");
      faculty_monday_period_3.value = data.data[10].faculty.join(",");
      let roomno_monday_period_3 = document.getElementById("roomno-monday-period-3");
      roomno_monday_period_3.value = data.data[10].room;
      // Tuesday
      let tuesday_period_3 = document.getElementById("tuesday-period-3");
      tuesday_period_3.value = data.data[11].subject;
      let faculty_tuesday_period_3 = document.getElementById("faculty-tuesday-period-3");
      faculty_tuesday_period_3.value = data.data[11].faculty.join(",");
      let roomno_tuesday_period_3 = document.getElementById("roomno-tuesday-period-3");
      roomno_tuesday_period_3.value = data.data[11].room;
      // Wednesday
      let wednesday_period_3 = document.getElementById("wednesday-period-3");
      wednesday_period_3.value = data.data[12].subject;
      let faculty_wednesday_period_3 = document.getElementById("faculty-wednesday-period-3");
      faculty_wednesday_period_3.value = data.data[12].faculty.join(",");
      let roomno_wednesday_period_3 = document.getElementById("roomno-wednesday-period-3");
      roomno_wednesday_period_3.value = data.data[12].room;
      // Thursday
      let thursday_period_3 = document.getElementById("thursday-period-3");
      thursday_period_3.value = data.data[13].subject;
      let faculty_thursday_period_3 = document.getElementById("faculty-thursday-period-3");
      faculty_thursday_period_3.value = data.data[13].faculty.join(",");
      let roomno_thursday_period_3 = document.getElementById("roomno-thursday-period-3");
      roomno_thursday_period_3.value = data.data[13].room;
      // Friday
      let friday_period_3 = document.getElementById("friday-period-3");
      friday_period_3.value = data.data[14].subject;
      let faculty_friday_period_3 = document.getElementById("faculty-friday-period-3");
      faculty_friday_period_3.value = data.data[14].faculty.join(",");
      let roomno_friday_period_3 = document.getElementById("roomno-friday-period-3");
      roomno_friday_period_3.value = data.data[14].room;
      // period-5
      // Monday
      let monday_period_5 = document.getElementById("monday-period-5");
      monday_period_5.value = data.data[15].subject;
      let faculty_monday_period_5 = document.getElementById("faculty-monday-period-5");
      faculty_monday_period_5.value = data.data[15].faculty.join(",");
      let roomno_monday_period_5 = document.getElementById("roomno-monday-period-5");
      roomno_monday_period_5.value = data.data[15].room;

      // Tuesday
      let tuesday_period_5 = document.getElementById("tuesday-period-5");
      tuesday_period_5.value = data.data[16].subject;
      let faculty_tuesday_period_5 = document.getElementById("faculty-tuesday-period-5");
      faculty_tuesday_period_5.value = data.data[16].faculty.join(",");
      let roomno_tuesday_period_5 = document.getElementById("roomno-tuesday-period-5");
      roomno_tuesday_period_5.value = data.data[16].room;

      // Wednesday
      let wednesday_period_5 = document.getElementById("wednesday-period-5");
      wednesday_period_5.value = data.data[17].subject;
      let faculty_wednesday_period_5 = document.getElementById("faculty-wednesday-period-5");
      faculty_wednesday_period_5.value = data.data[17].faculty.join(",");
      let roomno_wednesday_period_5 = document.getElementById("roomno-wednesday-period-5");
      roomno_wednesday_period_5.value = data.data[17].room;

      // Thursday
      let thursday_period_5 = document.getElementById("thursday-period-5");
      thursday_period_5.value = data.data[18].subject;
      let faculty_thursday_period_5 = document.getElementById("faculty-thursday-period-5");
      faculty_thursday_period_5.value = data.data[18].faculty.join(",");
      let roomno_thursday_period_5 = document.getElementById("roomno-thursday-period-5");
      roomno_thursday_period_5.value = data.data[18].room;

      // Friday
      let friday_period_5 = document.getElementById("friday-period-5");
      friday_period_5.value = data.data[19].subject;
      let faculty_friday_period_5 = document.getElementById("faculty-friday-period-5");
      faculty_friday_period_5.value = data.data[19].faculty.join(",");
      let roomno_friday_period_5 = document.getElementById("roomno-friday-period-5");
      roomno_friday_period_5.value = data.data[19].room;
      // period - 6
      // Monday
      let monday_period_6 = document.getElementById("monday-period-6");
      monday_period_6.value = data.data[20].subject;
      let faculty_monday_period_6 = document.getElementById("faculty-monday-period-6");
      faculty_monday_period_6.value = data.data[20].faculty.join(",");
      let roomno_monday_period_6 = document.getElementById("roomno-monday-period-6");
      roomno_monday_period_6.value = data.data[20].room;
      // Tuesday
      let tuesday_period_6 = document.getElementById("tuesday-period-6");
      tuesday_period_6.value = data.data[21].subject;
      let faculty_tuesday_period_6 = document.getElementById("faculty-tuesday-period-6");
      faculty_tuesday_period_6.value = data.data[21].faculty.join(",");
      let roomno_tuesday_period_6 = document.getElementById("roomno-tuesday-period-6");
      roomno_tuesday_period_6.value = data.data[21].room;
      // Wednesday
      let wednesday_period_6 = document.getElementById("wednesday-period-6");
      wednesday_period_6.value = data.data[22].subject;
      let faculty_wednesday_period_6 = document.getElementById("faculty-wednesday-period-6");
      faculty_wednesday_period_6.value = data.data[22].faculty.join(",");
      let roomno_wednesday_period_6 = document.getElementById("roomno-wednesday-period-6");
      roomno_wednesday_period_6.value = data.data[22].room;
      // Thursday
      let thursday_period_6 = document.getElementById("thursday-period-6");
      thursday_period_6.value = data.data[23].subject;
      let faculty_thursday_period_6 = document.getElementById("faculty-thursday-period-6");
      faculty_thursday_period_6.value = data.data[23].faculty.join(",");
      let roomno_thursday_period_6 = document.getElementById("roomno-thursday-period-6");
      roomno_thursday_period_6.value = data.data[23].room;
      // Friday
      let friday_period_6 = document.getElementById("friday-period-6");
      friday_period_6.value = data.data[24].subject;
      let faculty_friday_period_6 = document.getElementById("faculty-friday-period-6");
      faculty_friday_period_6.value = data.data[24].faculty.join(",");
      let roomno_friday_period_6 = document.getElementById("roomno-friday-period-6");
      roomno_friday_period_6.value = data.data[24].room;
      // period - 7
      // Monday
      let monday_period_7 = document.getElementById("monday-period-7");
      monday_period_7.value = data.data[25].subject;
      let faculty_monday_period_7 = document.getElementById("faculty-monday-period-7");
      faculty_monday_period_7.value = data.data[25].faculty.join(",");
      let roomno_monday_period_7 = document.getElementById("roomno-monday-period-7");
      roomno_monday_period_7.value = data.data[25].room;
      // Tuesday
      let tuesday_period_7 = document.getElementById("tuesday-period-7");
      tuesday_period_7.value = data.data[26].subject;
      let faculty_tuesday_period_7 = document.getElementById("faculty-tuesday-period-7");
      faculty_tuesday_period_7.value = data.data[26].faculty.join(",");
      let roomno_tuesday_period_7 = document.getElementById("roomno-tuesday-period-7");
      roomno_tuesday_period_7.value = data.data[26].room;
      // Wednesday
      let wednesday_period_7 = document.getElementById("wednesday-period-7");
      wednesday_period_7.value = data.data[27].subject;
      let faculty_wednesday_period_7 = document.getElementById("faculty-wednesday-period-7");
      faculty_wednesday_period_7.value = data.data[27].faculty.join(",");
      let roomno_wednesday_period_7 = document.getElementById("roomno-wednesday-period-7");
      roomno_wednesday_period_7.value = data.data[27].room;
      // Thursday
      let thursday_period_7 = document.getElementById("thursday-period-7");
      thursday_period_7.value = data.data[28].subject;
      let faculty_thursday_period_7 = document.getElementById("faculty-thursday-period-7");
      faculty_thursday_period_7.value = data.data[28].faculty.join(",");
      let roomno_thursday_period_7 = document.getElementById("roomno-thursday-period-7");
      roomno_thursday_period_7.value = data.data[28].room;
      // Friday
      let friday_period_7 = document.getElementById("friday-period-7");
      friday_period_7.value = data.data[29].subject;
      let faculty_friday_period_7 = document.getElementById("faculty-friday-period-7");
      faculty_friday_period_7.value = data.data[29].faculty.join(",");
      let roomno_friday_period_7 = document.getElementById("roomno-friday-period-7");
      roomno_friday_period_7.value = data.data[29].room;
      // period - 8
      // Monday
      let monday_period_8 = document.getElementById("monday-period-8");
      monday_period_8.value = data.data[30].subject;
      let faculty_monday_period_8 = document.getElementById("faculty-monday-period-8");
      faculty_monday_period_8.value = data.data[30].faculty.join(",");
      let roomno_monday_period_8 = document.getElementById("roomno-monday-period-8");
      roomno_monday_period_8.value = data.data[30].room;
      // Tuesday
      let tuesday_period_8 = document.getElementById("tuesday-period-8");
      tuesday_period_8.value = data.data[31].subject;
      let faculty_tuesday_period_8 = document.getElementById("faculty-tuesday-period-8");
      faculty_tuesday_period_8.value = data.data[31].faculty.join(",");
      let roomno_tuesday_period_8 = document.getElementById("roomno-tuesday-period-8");
      roomno_tuesday_period_8.value = data.data[31].room;
      // Wednesday
      let wednesday_period_8 = document.getElementById("wednesday-period-8");
      wednesday_period_8.value = data.data[32].subject;
      let faculty_wednesday_period_8 = document.getElementById("faculty-wednesday-period-8");
      faculty_wednesday_period_8.value = data.data[32].faculty.join(",");
      let roomno_wednesday_period_8 = document.getElementById("roomno-wednesday-period-8");
      roomno_wednesday_period_8.value = data.data[32].room;
      // Thursday
      let thursday_period_8 = document.getElementById("thursday-period-8");
      thursday_period_8.value = data.data[33].subject;
      let faculty_thursday_period_8 = document.getElementById("faculty-thursday-period-8");
      faculty_thursday_period_8.value = data.data[33].faculty.join(",");
      let roomno_thursday_period_8 = document.getElementById("roomno-thursday-period-8");
      roomno_thursday_period_8.value = data.data[33].room;
      // Friday
      let friday_period_8 = document.getElementById("friday-period-8");
      friday_period_8.value = data.data[34].subject;
      let faculty_friday_period_8 = document.getElementById("faculty-friday-period-8");
      faculty_friday_period_8.value = data.data[34].faculty.join(",");
      let roomno_friday_period_8 = document.getElementById("roomno-friday-period-8");
      roomno_friday_period_8.value = data.data[34].room;
    })
    .catch((error) => console.error(error));
}
