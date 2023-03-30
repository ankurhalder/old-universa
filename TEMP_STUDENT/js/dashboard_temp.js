function dashboard_temp() {
   const verify = localStorage.getItem("token");
   if (verify != null) {
    const data = JSON.parse( localStorage.getItem("userData"));
    console.log("done")
    console.log(data)
    console.log(data.type)
    if (data.type === "guest") {
      window.location.href = "/TEMP_STUDENT/dashboard_st_lp.html";
    } else if(data.type === "admin"){
      window.location.href = "/ADMIN/admin.html"
    }
    else if (data.type === "student"){
      window.location.href = "/P_STUDENT/p_student.html"
    }
   }
   
   else{
      console.log("You are logged out")
 }
}
