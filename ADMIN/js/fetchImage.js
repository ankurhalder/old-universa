function fetchImage() {
  const Token = localStorage.getItem("token");
  const urlParams = new URLSearchParams(window.location.search);
  // let applicant_id = urlParams.get("id");

  let userId = urlParams.get("id");
  if(!userId){
      userId = localStorage.getItem("userid")
  }
  console.log(userId)
  fetch(`https://universa-api.onrender.com/uploads/images/profile/id?user_id=${userId}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "token": Token,
      profile_image_name: Token,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      const img = document.getElementById("user-image");
      if (img) {
        img.src = data.data.files[0].url;
      }

      console.log(data.data.files[0].url);
      localStorage.setItem("imgurl", data.data.files[0].url);
    })
    .catch((error) => {
      console.error(error);
    });
}
