const token1 = localStorage.getItem("token");
function veryfyLogin() {
  console.log("token working");
  if (token1 === null) {
    window.location.href = "/index.html";
  }
}
