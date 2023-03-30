// Get the image element and the file input element
var image = document.getElementById('user-image');
var fileInput = document.querySelector('input[type="file"]');

// Add an event listener to the file input element
fileInput.addEventListener('change', function() {
  // Get the selected file
  console.log('hello world')
  var file = fileInput.files[0];

  // Create a new FileReader instance
  var reader = new FileReader();

  // Set the onload event handler
  reader.onload = function() {
    // Set the source attribute of the image element to the data URL of the uploaded file
    image.src = reader.result;
  };

  // Read the selected file as a data URL
  reader.readAsDataURL(file);
});
