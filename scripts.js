"use strict"; // Enable strict mode to catch common coding mistakes and unsafe actions

// Array of possible answers
let array = [
  "It is certain",
  "Without a doubt",
  "Most likely",
  "Ask again later",
  "Signs point to yes",
  "Don't count on it",
  "My sources say no",
];

// Event listener for when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("ready to roll"); // Log to console when the DOM is fully loaded

  const myForm = document.querySelector("#myForm"); // Get the form element by its ID

  // Add submit event listener to the form
  myForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(event.target); // Create a FormData object from the form element

    const question = formData.get("enterQuestion"); // Get the value of the input field with name "enterQuestion"

    const answerBox = document.querySelector("#answerBox"); // Get the answer box element by its ID

    const random = Math.floor(Math.random() * array.length); // Generate a random index based on the length of the array
    answerBox.innerText = array[random]; // Set the answer box text to a random answer from the array
    answerBox.style.display = "none"; // Ensure the answer box is hidden initially

    console.log(random, array[random]); // Log the random index and corresponding answer to the console

    const ball = document.getElementById("8Ball"); // Get the 8 Ball image element by its ID
    ball.classList.add("shake"); // Add the "shake" class to the image element to trigger the shake animation
    setTimeout(() => {
      ball.classList.remove("shake"); // Remove the "shake" class after 500ms to end the animation
      answerBox.style.display = "block"; // Make the answer box visible after the shake animation
    }, 500); // Duration of the shake animation in milliseconds
  });
});
