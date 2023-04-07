userid = 3797489034902127;
console.log(userid);
function deletePermanemt() {
  console.log("hehe boi");
  fetch(`https://universa-api.onrender.com/student/${userid}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "token": localStorage.getItem("token"),
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      if (data.status === true) {
        console.log("Deleted");
      } else if (data.status === false) {
        alert(`unsuccessful`);
      }
    })
    .catch((error) => console.error(error));
}
