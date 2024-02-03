// lib/shapes.test.js

const { Circle, Square, Triangle } = require('./shapes');

describe('Circle', () => {
  test('generates correct SVG markup', () => {
    const color = 'blue';
    const circle = new Circle(color);
    expect(circle.render()).toBe(`<circle cx="100" cy="100" r="80" fill="${color}" />`);
  });
});

describe('Square', () => {
  test('generates correct SVG markup', () => {
    const color = 'green';
    const square = new Square(color);
    // Assuming a square of 200x200 size for simplicity
    expect(square.render()).toBe(`<rect width="200" height="200" fill="${color}" />`);
  });
});

describe('Triangle', () => {
  test('generates correct SVG markup', () => {
    const color = 'red';
    const triangle = new Triangle(color);
    // Adjust as per implementation
    expect(triangle.render()).toBe(`<polygon points="100,10 40,198 190,78 10,78 160,198" fill="${color}" />`);
  });
});
