function fetchImage() {
  const Token = localStorage.getItem("token");
  fetch(`https://universa-api.onrender.com/uploads/images/profile`, {
    method: "GET",
    credentials: "include",
    headers: {
      token: Token,
      profile_image_name: Token,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const img = document.getElementById("user-image");
      img.src = data.data.files[0].url;
      console.log(data.data.files[0].url);
      localStorage.setItem("imgurl", data.data.files[0].url);
    })
    .catch((error) => {
      console.error(error);
    });
}
