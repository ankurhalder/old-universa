function getAllPermanent() {
    fetch(`https://universa-api.onrender.com/student`, {
        method: "GET",
        credentials: "include",
        headers: {
        //   "token": d
        }
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          Applicants = document.getElementById("applicant")
          if (data.status === true) {
            console.log("Permanent Account Received");
          } else if (data.status === false) {
            alert(`unsuccessful`)
          }
        })
        .catch((error) => console.error(error));
}