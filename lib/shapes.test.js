const { Circle, Square, Triangle } = require('./shapes');
const { parse } = require('svg-parser');

function parseSVG(svg) {
  return parse(svg, {
    xmlMode: true,
    lowerCaseTags: false,
    lowerCaseAttributeNames: false,
  });
}

describe('Circle', () => {
  test('generates correct SVG markup', () => {
    const color = 'blue';
    const text = 'SVG';
    const textColor = 'white';
    const circle = new Circle(color);
    circle.setText(text);
    circle.setTextColor(textColor);
    const expectedSVG = `<circle cx="100" cy="100" r="80" fill="${color}" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>`;
    const parsedExpected = parseSVG(expectedSVG);
    const parsedGenerated = parseSVG(circle.render());
    expect(parsedGenerated).toEqual(parsedExpected);
  });
});

describe('Square', () => {
  test('generates correct SVG markup', () => {
    const color = 'green';
    const text = 'SVG';
    const textColor = 'white';
    const square = new Square(color);
    square.setText(text);
    square.setTextColor(textColor);
    const expectedSVG = `<rect width="200" height="200" fill="${color}" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>`;
    const parsedExpected = parseSVG(expectedSVG);
    const parsedGenerated = parseSVG(square.render());
    expect(parsedGenerated).toEqual(parsedExpected);
  });
});

describe('Triangle', () => {
  test('generates correct SVG markup', () => {
    const color = 'red';
    const text = 'SVG';
    const textColor = 'white';
    const triangle = new Triangle(color);
    triangle.setText(text);
    triangle.setTextColor(textColor);
    const expectedSVG = `<polygon points="100,10 40,198 190,78 10,78 160,198" fill="${color}" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>`;
    const parsedExpected = parseSVG(expectedSVG);
    const parsedGenerated = parseSVG(triangle.render());
    expect(parsedGenerated).toEqual(parsedExpected);
  });
});
