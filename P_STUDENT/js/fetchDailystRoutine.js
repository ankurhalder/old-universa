let section = "a";
let stream = "cst";
let year = "2";
let day = "monday";
const verify = localStorage.getItem("token");
function fetchRoutine() {
  fetch(`https://universa-api.onrender.com/routine/daily?year=${year}&stream=${stream}&section=${section}&day=${day}`, {
    // include user_id in the URL
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: verify,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error(error));
}
