function fetchTimeTable() {
  const year = document.getElementById("select-year");
  const stream = document.getElementById("select-stream");
  const section = document.getElementById("select-section");
  fetch(
    `https://universa-api.onrender.com/routine/weekly?year=${year}&stream=${stream}&section=${section}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("loginUserId"),
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let presentAddress = document.getElementById("present_address");
      presentAddress.innerText = data.data.personal_info.present_address.street;
      let presentCity = document.getElementById("present_city");
      presentCity.innerText = data.data.personal_info.present_address.city;
      let presentPincode = document.getElementById("present_pincode");
      presentPincode.innerText =
        data.data.personal_info.present_address.pincode;
      let presentDistrict = document.getElementById("present_district");
      presentDistrict.innerText =
        data.data.personal_info.present_address.district;
      let presentState = document.getElementById("present_state");
      presentState.innerText = data.data.personal_info.present_address.state;
    })
    .catch((error) => console.error(error));
}
