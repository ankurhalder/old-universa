
window.addEventListener('DOMContentLoaded', function() {
  // your code here
  const pincodeInput = document.getElementById("present_pincode");
const cityInput = document.getElementById("present_city");
const districtInput = document.getElementById("present_district");
const stateInput = document.getElementById("present_state");

pincodeInput.addEventListener("blur", () => {
  const pincode = pincodeInput.value;
  const url = `https://api.postalpincode.in/pincode/${pincode}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data && data[0] && data[0].PostOffice) {
        const postOffice = data[0].PostOffice[0];
        const address =
          postOffice.Name +
          ", " +
          postOffice.Block +
          ", " +
          postOffice.District;
        document.getElementById("present_address").value = address;
        cityInput.value = postOffice.District;
        districtInput.value = postOffice.Block;
        stateInput.value = postOffice.State;
      } else {
        document.getElementById("present_address").value = "";
        cityInput.value = "";
        districtInput.value = "";
        stateInput.value = "";
      }
    })
    .catch((error) => {
      console.error(error);
    });
});
});