function createTimeTable() {
  const routineYear = localStorage.getItem("routine_year");
  const streamYear = localStorage.getItem("stream_year");
  const sectionYear = localStorage.getItem("section_year");

  console.log(routineYear);
  console.log(streamYear);
  console.log(sectionYear);

  const period_1_start_time = document.getElementById("period-1-start-time");
  const period_1_end_time = document.getElementById("period-1-end-time");
  const period_2_start_time = document.getElementById("period-2-start-time");
  const period_2_end_time = document.getElementById("period-2-end-time");
  const period_3_start_time = document.getElementById("period-3-start-time");
  const period_3_end_time = document.getElementById("period-3-end-time");
  const period_4_start_time = document.getElementById("period-4-start-time");
  const period_4_end_time = document.getElementById("period-4-end-time");
  const period_5_start_time = document.getElementById("period-5-start-time");
  const period_5_end_time = document.getElementById("period-5-end-time");
  const period_6_start_time = document.getElementById("period-6-start-time");
  const period_6_end_time = document.getElementById("period-6-end-time");
  const period_7_start_time = document.getElementById("period-7-start-time");
  const period_7_end_time = document.getElementById("period-7-end-time");
  const period_8_start_time = document.getElementById("period-8-start-time");
  const period_8_end_time = document.getElementById("period-8-end-time");

  let hello = {
    year: routineYear,
    stream: streamYear,
    section: sectionYear,
    routine_data: [
      {
        day: "monday",
        periods: [
          {
            // Monday - period 1
            start: period_1_start_time.value,
            end: period_1_end_time.value,
          },
          {
            // Monday - period 2
            start: period_2_start_time.value,
            end: period_2_end_time.value,
          },
          {
            // Monday - period 3
            start: period_3_start_time.value,
            end: period_3_end_time.value,
          },
          {
            // Monday - period 4
            start: period_4_start_time.value,
            end: period_4_end_time.value,
          },
          {
            // Monday - period 5
            start: period_5_start_time.value,
            end: period_5_end_time.value,
          },
          {
            // Monday - period 6
            start: period_6_start_time.value,
            end: period_6_end_time.value,
          },
          {
            // Monday - period 7
            start: period_7_start_time.value,
            end: period_7_end_time.value,
          },
          {
            // Monday - period 8
            start: period_8_start_time.value,
            end: period_8_end_time.value,
          },
        ],
      },
      {
        day: "Tuesday",
        periods: [
          {
            // Tuesday - period 1
            start: period_1_start_time.value,
            end: period_1_end_time.value,
          },
          {
            // Tuesday - period 2
            start: period_2_start_time.value,
            end: period_2_end_time.value,
          },
          {
            // Tuesday - period 3
            start: period_3_start_time.value,
            end: period_3_end_time.value,
          },
          {
            // Tuesday - period 4
            start: period_4_start_time.value,
            end: period_4_end_time.value,
          },
          {
            // Tuesday - period 5
            start: period_5_start_time.value,
            end: period_5_end_time.value,
          },
          {
            // Tuesday - period 6
            start: period_6_start_time.value,
            end: period_6_end_time.value,
          },
          {
            // Tuesday - period 7
            start: period_7_start_time.value,
            end: period_7_end_time.value,
          },
          {
            // Tuesday - period 8
            start: period_8_start_time.value,
            end: period_8_end_time.value,
          },
        ],
      },
      {
        day: "Wednesday",
        periods: [
          {
            // Wednesday - period 1
            start: period_1_start_time.value,
            end: period_1_end_time.value,
          },
          {
            // Wednesday - period 2
            start: period_2_start_time.value,
            end: period_2_end_time.value,
          },
          {
            // Wednesday - period 3
            start: period_3_start_time.value,
            end: period_3_end_time.value,
          },
          {
            // Wednesday - period 4
            start: period_4_start_time.value,
            end: period_4_end_time.value,
          },
          {
            // Wednesday - period 5
            start: period_5_start_time.value,
            end: period_5_end_time.value,
          },
          {
            // Wednesday - period 6
            start: period_6_start_time.value,
            end: period_6_end_time.value,
          },
          {
            // Wednesday - period 7
            start: period_7_start_time.value,
            end: period_7_end_time.value,
          },
          {
            // Wednesday - period 8
            start: period_8_start_time.value,
            end: period_8_end_time.value,
          },
        ],
      },
      {
        day: "Thursday",
        periods: [
          {
            // Thursday - period 1
            start: period_1_start_time.value,
            end: period_1_end_time.value,
          },
          {
            // Thursday - period 2
            start: period_2_start_time.value,
            end: period_2_end_time.value,
          },
          {
            // Thursday - period 3
            start: period_3_start_time.value,
            end: period_3_end_time.value,
          },
          {
            // Thursday - period 4
            start: period_4_start_time.value,
            end: period_4_end_time.value,
          },
          {
            // Thursday - period 5
            start: period_5_start_time.value,
            end: period_5_end_time.value,
          },
          {
            // Thursday - period 6
            start: period_6_start_time.value,
            end: period_6_end_time.value,
          },
          {
            // Thursday - period 7
            start: period_7_start_time.value,
            end: period_7_end_time.value,
          },
          {
            // Thursday - period 8
            start: period_8_start_time.value,
            end: period_8_end_time.value,
          },
        ],
      },
      {
        day: "Friday",
        periods: [
          {
            // Friday - period 1
            start: period_1_start_time.value,
            end: period_1_end_time.value,
          },
          {
            // Friday - period 2
            start: period_2_start_time.value,
            end: period_2_end_time.value,
          },
          {
            // Friday - period 3
            start: period_3_start_time.value,
            end: period_3_end_time.value,
          },
          {
            // Friday - period 4
            start: period_4_start_time.value,
            end: period_4_end_time.value,
          },
          {
            // Friday - period 5
            start: period_5_start_time.value,
            end: period_5_end_time.value,
          },
          {
            // Friday - period 6
            start: period_6_start_time.value,
            end: period_6_end_time.value,
          },
          {
            // Friday - period 7
            start: period_7_start_time.value,
            end: period_7_end_time.value,
          },
          {
            // Friday - period 8
            start: period_8_start_time.value,
            end: period_8_end_time.value,
          },
        ],
      },
    ],
  };

  let period_1_duration = document.getElementById("period-1-duration");
  period_1_duration.value = period_1_end_time.value - period_1_start_time.value;
  let period_2_duration = document.getElementById("period-2-duration");
  period_2_duration.value = period_2_end_time.value - period_2_start_time.value;
  let period_3_duration = document.getElementById("period-3-duration");
  period_3_duration.value = period_3_end_time.value - period_3_start_time.value;
  let period_4_duration = document.getElementById("period-4-duration");
  period_4_duration.value = period_4_end_time.value - period_4_start_time.value;
  let period_5_duration = document.getElementById("period-5-duration");
  period_5_duration.value = period_5_end_time.value - period_5_start_time.value;
  let period_6_duration = document.getElementById("period-6-duration");
  period_6_duration.value = period_6_end_time.value - period_6_start_time.value;
  let period_7_duration = document.getElementById("period-7-duration");
  period_7_duration.value = period_7_end_time.value - period_7_start_time.value;
  let period_8_duration = document.getElementById("period-8-duration");
  period_8_duration.value = period_8_end_time.value - period_8_start_time.value;

  fetch(`https://universa-api.onrender.com/routine`, {
    // include user_id in the URL
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
    body: JSON.stringify(hello),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error(error));
}
