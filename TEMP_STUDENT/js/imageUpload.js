document.getElementById("image-form").addEventListener("submit",uploadImage)
function uploadImage(imageimage){
  imageimage.preventDefault();
    let image = new FormData(document.getElementById("image-form"))
    const Token = localStorage.getItem("token");
    console.log(Token);
    image.append("vidit","ankur")
    console.log(image);
    console.log('hello world');
    fetch(`https://universa-api.onrender.com/uploads/images/profile`, {
        method: "PUT",
        credentials: "include",
        headers: {
           "token": Token,
        "profile_image_name": Token
        },
        body:image
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          alert(`Image Uploaded Successfully`)
        })
        .catch((error) => 
        console.error(error));
}