function deleteRoutine() {
  const userId = localStorage.getItem("userId");
  if (userId === null) {
  }
  fetch(`https://universa-api.onrender.com/routine?year=${year}&stream=${stream}&section=${section}`, {
    // include user_id in the URL
    method: "DELETE",
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
