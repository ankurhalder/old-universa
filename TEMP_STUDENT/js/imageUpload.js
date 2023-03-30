document.getElementById("image-form").addEventListener("submit",uploadImage)
function uploadImage(imageimage){
  imageimage.preventDefault();
    let image = new FormData(document.getElementById("image-form"))
    image.append("vidit","ankur")
    console.log(image);
    console.log('hello world');
    fetch(`https://universa-api.onrender.com/upload`, {
        method: "POST",
        credentials: "include",
        headers: {
        //   "token": d
        "profile_image_name": "universa-image"
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