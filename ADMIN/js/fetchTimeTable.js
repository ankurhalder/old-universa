function fetchTimeTable() {
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
  fetch(
    `https://universa-api.onrender.com/routine/weekly?year=${year}&stream=${stream}&section=${section}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "token": localStorage.getItem("token"),
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let period_1_start_time = document.getElementById("period-1-start-time");
      period_1_start_time.innerText =
        data.data[0].start + ` - ` + data.data[0].end;
      let period_2_start_time = document.getElementById("period-2-start-time");
      period_2_start_time.innerText =
        data.data[4].start + ` - ` + data.data[4].end;
      let period_3_start_time = document.getElementById("period-3-start-time");
      period_3_start_time.innerText =
        data.data[9].start + ` - ` + data.data[9].end;
      let period_4_start_time = document.getElementById("period-4-start-time");
      period_4_start_time.innerText =
        data.data[14].start + ` - ` + data.data[14].end;
      let period_5_start_time = document.getElementById("period-5-start-time");
      period_5_start_time.innerText =
        data.data[19].start + ` - ` + data.data[19].end;
      let period_6_start_time = document.getElementById("period-6-start-time");
      period_6_start_time.innerText =
        data.data[24].start + ` - ` + data.data[24].end;
      let period_7_start_time = document.getElementById("period-7-start-time");
      period_7_start_time.innerText =
        data.data[29].start + ` - ` + data.data[29].end;
      let period_8_start_time = document.getElementById("period-8-start-time");
      period_8_start_time.innerText =
        data.data[34].start + ` - ` + data.data[34].end;
    })
    .catch((error) => console.error(error));
}
