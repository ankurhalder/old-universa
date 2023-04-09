// function getAllPermanent() {
//   fetch(`https://universa-api.onrender.com/student`, {
//     method: "GET",
//     credentials: "include",
//     headers: {
//       "token": localStorage.getItem("token"),
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       Applicants = document.getElementById("applicant");
//       if (data.status === true) {
//         console.log("Permanent Account Received");
//         const dataCount = data.data.length;
//         console.log(dataCount);
//         console.log("hello world");
//         for (let i = 0; i < dataCount; i++) {
//           const pTag = document.createElement("p");
//           pTag.textContent = data.data[i].course_info.enrollment_number;
//           Applicants.appendChild(pTag);
//         }
//       } else if (data.status === false) {
//         alert(`unsuccessful`);
//       }
//     })
//     .catch((error) => console.error(error));
// }
// flwibhflweifblw

async function getAllPermanent() {
  try {
    const response = await  fetch(`https://universa-api.onrender.com/student`, {
      method: "GET",
      credentials: "include",
      headers: {
        "token": localStorage.getItem("token"),
      },
    })
    const data = await response.json()
    console.log(data)
  } catch (error) {
    
  }
}