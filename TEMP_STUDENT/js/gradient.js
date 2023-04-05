// Get a reference to the heading element
const heading = document.getElementById("my-heading");

// Define the gradient colors
const gradientColors = [
  "blue",
  "lightblue",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];

// Define the gradient direction
const gradientDirection = "to right";

// Define the gradient animation duration
const gradientDuration = "2s";

// Create the gradient CSS string
const gradient = `linear-gradient(${gradientDirection}, ${gradientColors.join(
  ", "
)})`;

// Set the gradient as the font color and animate it
heading.style.color = gradient;
heading.style.background = gradient;
heading.style.webkitBackgroundClip = "text";
heading.style.webkitTextFillColor = "transparent";
heading.style.animation = `hue 3.5s ease infinite`;

// Define the gradient animation keyframes
const keyframes = `
    @keyframes hue {
      from {
        filter: hue-rotate(360deg);
      }
      to {
        filter: hue-rotate(0deg);
      }
    }
  `;

// Add the keyframes to a style element in the document head
const style = document.createElement("style");
style.appendChild(document.createTextNode(keyframes));
document.head.appendChild(style);
