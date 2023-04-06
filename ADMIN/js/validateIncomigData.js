function validateIncomingData() {
  //   let routineYear = localStorage.getItem("routine_year");
  //   let streamYear = localStorage.getItem("stream_year");
  //   let sectionYear = localStorage.getItem("section_year");
  // Year
  if (!YEAR()) {
    alert("Please Enter Student Year");
    return;
  }
  if (!STREAM()) {
    alert("Please Enter Student Stream");
    return;
  }
  if (!SECTION()) {
    alert("Please Enter Student Section");
    return;
  }
  function YEAR() {
    Year_Data = document.getElementById("select-year");
    if (Year_Data.value.length === 0) {
      Year_Data.focus();
      return false;
    }
    Year_Data.addEventListener("blur", YEAR);
    return true;
  }
  function STREAM() {
    Stream_Data = document.getElementById("select-stream");
    if (Stream_Data.value.length === 0) {
      Stream_Data.focus();
      return false;
    }
    Stream_Data.addEventListener("blur", STREAM);
    return true;
  }
  function SECTION() {
    Section_Data = document.getElementById("select-section");
    if (Section_Data.value.length === 0) {
      Section_Data.focus();
      return false;
    }
    Section_Data.addEventListener("blur", SECTION);
    return true;
  }
  window.location.href = "/ADMIN/createTimeTable.html";
}
