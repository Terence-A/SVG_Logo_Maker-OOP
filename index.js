// Using inquirer dependency
const inquirer = require("inquirer");

// Using file system dependency
const fs = require("fs");

// inquirer
//   - prompt for text: can enter up to 3 characters
//   - text color (color keyword or a hexadecimal number)
//   - prompt a shape from: circle, triangle, square
//   - shape color (color keyword or hexadecimal number)

promptUser = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "logoText",
        message:
          "Enter Text that you would like to appear inside logo. (No more than 3 characters!)",
        validate: (input) => {
          if (input.length <= 3) {
            return true;
          } else {
            console.log(" Sorry, please try again! ");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "textColor",
        message:
          "Enter a color you would like the text to be. (Color keyword or hexadecimal number!)",
        validate: (textColor) => {
          if (textColor) {
            return true;
          } else {
            console.log("No color picked, please enter a color!");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "logoShape",
        message: "What shape would you like your logo to be (Choose one)",
        choices: ["circle", "triangle", "square"],
      },
    ])
    .then((answers) => {
      console.log(answers.logoText);
      console.log(answers.textColor);
      console.log(answers.logoShape);
    });
};

// Create SVG file namde "logo.svg" - output text "Generated logo.svg" is printed to command link
// -- when opened (logo.svg) file in browser shown 300*200 pixel image that matches criteria

// Render application
promptUser();
