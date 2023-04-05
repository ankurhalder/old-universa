const token1 = localStorage.getItem("token");
function veryfyLogin() {
  if (token1 != null) {
    window.location.href = "/P_STUDENT/p_student.html";
  }
}
