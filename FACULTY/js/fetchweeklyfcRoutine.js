let faculty_name = "che";
let day = "monday";
function fetchRoutine() {
  const userId = localStorage.getItem("userId");
  if (userId === null) {
    //   window.location.href = "/index.html"
  }
  // retrieve user_id from local storage
  console.log(7563975692387);
  fetch(`https://universa-api.onrender.com/routine/weekly?faculty=${faculty_name}`, {
    // include user_id in the URL
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error(error));
}
