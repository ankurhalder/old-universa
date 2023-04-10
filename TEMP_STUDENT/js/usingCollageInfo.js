const collegeData = JSON.parse(localStorage.getItem("college_data"));
const setCollegeDropdown = () => {
  let courses_dropdown = document.getElementById("course_name");
  let admission_year = document.getElementById("admission_year");
  admission_year.innerText = new Date().getFullYear();
  collegeData.college_courses.map((course) => {
    let option = document.createElement("option");
    courses_dropdown.appendChild(option);
    option.value = course.name;
    option.innerText = course.name;
  });
};

const setStreamsDropdown = () => {
  let courses_dropdown = document.getElementById("course_name");
  let streams_dropdown = document.getElementById("course_stream");
  let course_duration = document.getElementById("course_duration");
  streams_dropdown.replaceChildren();
  const selected_course = courses_dropdown.value;
  let available_streams;
  for (let i = 0; i < collegeData.college_courses.length; i++) {
    if (collegeData.college_courses[i].name === selected_course) {
      course_duration.innerText = parseInt(collegeData.college_courses[i].total_sem) / 2;
      available_streams = collegeData.college_courses[i].streams;
    }
  }

  if (available_streams.length < 1) {
    streams_dropdown.style.visibility = "hidden";
  } else {
    streams_dropdown.style.visibility = "visible";
  }
  available_streams.map((stream) => {
    let option = document.createElement("option");
    streams_dropdown.appendChild(option);
    option.value = stream;
    option.innerText = stream;
  });
};
let courses_dropdown = document.getElementById("course_name");
courses_dropdown.addEventListener("change", setStreamsDropdown);
