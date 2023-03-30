function getAllTemp() {
  const token1 = localStorage.getItem("token");
  console.log("token working");
  if (token1 === null) {
    window.location.href = "/index.html";
  }
  fetch(`https://universa-api.onrender.com/student/temp`, {
    method: "GET",
    credentials: "include",
    headers: {
      //   "token": d
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const dataCount = data.data.length;
      console.log(dataCount);
      if (data.status === true) {
        console.log("Temp Account Received");
        for (let i = 0; i < dataCount; i++) {
          const tempElement = document.createElement("div");
          tempElement.classList.add("temp");
          tempElement.setAttribute("id", "temp-" + i);
          const innerDiv1 = document.createElement("div");
          innerDiv1.setAttribute("id", "innerDiv1-" + i);
          const anchor1 = document.createElement("a");
          anchor1.setAttribute("href", "/ADMIN/temp_st.html");
          anchor1.textContent = "Approve Applicant";
          // Add click event listener to "Approve Applicant" button
          anchor1.addEventListener("click", (event) => {
            event.preventDefault();
            const p2Id = event.target.closest(".temp").querySelector("p[id^='p2-']").getAttribute("data-id");
            console.log("p2 id:", p2Id);
            window.location.href = `/ADMIN/temp_st.html?id=${p2Id}`;
          });
          innerDiv1.appendChild(anchor1);
          const innerDiv2 = document.createElement("div");
          innerDiv2.setAttribute("id", "innerDiv2-" + i);
          const anchor2 = document.createElement("a");
          anchor2.textContent = "Delete Applicant";
          anchor2.setAttribute("href","")
          anchor2.addEventListener("click", (event) => {
            event.preventDefault();
            const enrollmentNumber = event.target.closest(".temp").querySelector("p[id^='p2-']").getAttribute("data-id");
            console.log("enrollment number:", enrollmentNumber);
            deleteApplicant(enrollmentNumber);
          });
          
          innerDiv2.appendChild(anchor2);
          const p1 = document.createElement("p");
          p1.setAttribute("id", "p1-" + i);
          p1.textContent =
            "Applicant's Name: " +
            data.data[i].personal_info.first_name +
            " " +
            data.data[i].personal_info.middle_name +
            " " +
            data.data[i].personal_info.last_name;
          const p2 = document.createElement("p");
          p2.textContent = "USER ID: " + data.data[i].course_info.enrollment_number;
          p2.setAttribute("id", "p2-" + i);
          p2.setAttribute("data-id", data.data[i].course_info.enrollment_number); // Add data-id attribute
          tempElement.appendChild(p1);
          tempElement.appendChild(p2);
          tempElement.appendChild(innerDiv1);
          tempElement.appendChild(innerDiv2);
          document.getElementById("tempimcontainer").appendChild(tempElement);
        }
      } else if (data.status === false) {
        alert(`unsuccessful`);
      }
    })
    .catch((error) => console.error(error));
}
