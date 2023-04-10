function copyPresentAddress() {
  if (document.getElementById("same_as_present_address").checked) {
    // Copy present address values to permanent address fields
    document.getElementById("permanent_address").value = document.getElementById("present_address").value;
    document.getElementById("permanent_pincode").value = document.getElementById("present_pincode").value;
    document.getElementById("permanent_city").value = document.getElementById("present_city").value;
    document.getElementById("permanent_district").value = document.getElementById("present_district").value;
    document.getElementById("permanent_state").value = document.getElementById("present_state").value;
  } else {
    // Clear permanent address fields
    document.getElementById("permanent_address").value = "";
    document.getElementById("permanent_pincode").value = "";
    document.getElementById("permanent_city").value = "";
    document.getElementById("permanent_district").value = "";
    document.getElementById("permanent_state").value = "";
  }
}
