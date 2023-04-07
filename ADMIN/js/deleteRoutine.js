function deleteRoutine() {
  const userId = localStorage.getItem("userId");
  if (userId === null) {
    //   window.location.href = "/index.html"
  }
  // retrieve user_id from local storage
  console.log(7563975692387);
  fetch(
    `https://universa-api.onrender.com/routine?year=${year}&stream=${stream}&section=${section}`,
    {
      // include user_id in the URL
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "token": localStorage.getItem("token"),
      },
      body: JSON.stringify(hello),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error(error));
}
