const token1 = localStorage.getItem("token");
function veryfyLogin() {
  console.log("token working");
  console.log(token1)
  if (token1 === null) {
    window.location.href = "/index.html";
  }
}
