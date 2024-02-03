
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

async function generateLogo() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo:',
      validate: input => input.length <= 3 ? true : 'Logo text must be up to three characters.'
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose the shape of the logo:',
      choices: ['Circle', 'Square', 'Triangle'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the color for the shape:',
    }
  ]);

  let shapeSvg;
  switch (answers.shape) {
    case 'Circle':
      shapeSvg = new Circle(answers.shapeColor).render();
      break;
    case 'Square':
      shapeSvg = new Square(answers.shapeColor).render();
      break;
    case 'Triangle':
      shapeSvg = new Triangle(answers.shapeColor).render();
      break;
  }

  const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeSvg}
    <text x="150" y="100" font-size="20" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
  </svg>`;

  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
}

generateLogo();
