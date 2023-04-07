
function deletePermanemt() {
  const token1 = localStorage.getItem("token");
  const urlParams = new URLSearchParams(window.location.search);
  // let applicant_id = urlParams.get("id");
  if (token1 === null) {
    window.location.href = "/index.html";
  }
  const userId = urlParams.get("id");

  const confirmed = window.confirm(
    "Are you sure you want to delete this applicant?"
  );
  if (!confirmed) {
    window.location.href = "/ADMIN/manage_students.html";
    return;
  }

  fetch(`https://universa-api.onrender.com/student/${userId}`, {
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
        alert(`Applicant Removed Successfully`);
        window.location.href = "/ADMIN/manage_students.html";
      } else if (data.status === false) {
        alert(`unsuccessful`);
      }
      if (data.status === true) {
        console.log("Deleted");
      } else if (data.status === false) {
        alert(`unsuccessful`);
      }
    })
    .catch((error) => console.error(error));
}
