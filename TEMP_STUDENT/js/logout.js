function logout() {
  const d = localStorage.getItem("token");
  console.log(d);
  fetch("https://universa-api.onrender.com/account/logout", {
    method: "GET",
    credentials: "include",
    headers: {
      token: d,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      if (data.status === true) {
        // Logout successful
        console.log("Logout successful");

        // Remove user ID from local storage
        localStorage.removeItem("loginUserId");
        localStorage.removeItem("token");
        // console.log(localStorage.getItem("loginUserId"));

        window.location.href = "/index.html";
      } else if (data.status === false) {
        // Logout unsuccessful
        alert(`Logout unsuccessfull`);
        // console.log(localStorage.getItem("loginUserId"));
      }
    })
    .catch((error) => console.error(error));
}
