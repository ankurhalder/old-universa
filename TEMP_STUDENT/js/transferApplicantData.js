function transferApplicantData() {
  const verify = localStorage.getItem("token");
  if (verify === null) {
    window.location.href = "/index.html";
  }
  const userId = localStorage.getItem("loginUserId");
  fetch(`https://universa-api.onrender.com/student/temp/${userId}`, {
    method: "GET",
    headers: {
      token: verify,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let FIRST_NAME = document.getElementById("personal_info_first_name");
      FIRST_NAME.value = data.data.personal_info.first_name;
    })
    .catch((error) => console.error(error));
}
