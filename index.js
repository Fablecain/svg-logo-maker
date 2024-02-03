const readlineSync = require('readline-sync');
const fs = require('fs');
const path = require('path');
const { Circle, Square, Triangle } = require('./lib/shapes');

// Define a function to generate and save SVG files
const generateSVG = () => {
  // Using readline-sync to collect user input (text, colors, shape)
  const userInput = {
    text: readlineSync.question('Enter text for the logo (up to three characters): '),
    textColor: readlineSync.question('Enter text color (keyword or hexadecimal): '),
    shape: readlineSync.question('Choose a shape for the logo (Circle/Square/Triangle): '),
    shapeColor: readlineSync.question('Enter shape color (keyword or hexadecimal): '),
  };

  // Create an instance of the selected shape
  let shape;
  switch (userInput.shape.toLowerCase()) {
    case 'circle':
      shape = new Circle(userInput.shapeColor);
      break;
    case 'square':
      shape = new Square(userInput.shapeColor);
      break;
    case 'triangle':
      shape = new Triangle(userInput.shapeColor);
      break;
    default:
      console.log('Invalid shape choice');
      return;
  }

  // Set text and text color
  shape.setText(userInput.text);
  shape.setTextColor(userInput.textColor);

  // Generate SVG markup
  const svgMarkup = shape.render();

  // Specify the path to save the SVG file (in the examples directory)
  const filePath = path.join(__dirname, 'examples', 'logo.svg');

  // Save the SVG markup to the file
  fs.writeFileSync(filePath, svgMarkup);

  console.log('Generated logo.svg in the examples directory');
};

// Call the generateSVG function to start the generation process
generateSVG();
