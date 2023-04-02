function deleteApplicant(enrollmentNumber) {
  const confirmed = window.confirm("Are you sure you want to delete this applicant?");
  if (!confirmed) {
    window.location.href = "/ADMIN/manage_applicats.html";
    return;
  }

  console.log("delete function working");
  fetch(`https://universa-api.onrender.com/student/temp/${enrollmentNumber}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "token": localStorage.getItem('token'),
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      if (data.status === true) {
        alert(`Applicant Removed Successfully`);
        window.location.href = "/ADMIN/manage_applicats.html"
      } else if (data.status === false) {
        alert(`unsuccessful`);
      }
    })
    .catch((error) => console.error(error));
}