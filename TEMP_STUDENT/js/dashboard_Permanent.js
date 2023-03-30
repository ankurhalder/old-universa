function dashboard_Permanent() {
  const verify = localStorage.getItem("token");
if (verify === null) {
  window.location.href = "/index.html"
}
}