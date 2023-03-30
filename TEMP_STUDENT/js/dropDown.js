// Get the dropdown button and dropdown panel
var dropdownBtn = document.querySelector('.dropdown button');
var dropdownPanel = document.querySelector('.dropdown-panel');

// Add event listener to the dropdown button
dropdownBtn.addEventListener('mouseover', function() {
  // Show the dropdown panel
  dropdownPanel.style.display = 'block';
});

// Add event listener to the dropdown panel
dropdownPanel.addEventListener('mouseleave', function() {
  // Hide the dropdown panel
  dropdownPanel.style.display = 'none';
});

