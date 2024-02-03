
class Shape {
    constructor(color) {
      this.color = color;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="100" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect width="200" height="200" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="100,10 40,198 190,78 10,78 160,198" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Circle, Square, Triangle };
  