class Shape {
    constructor(color) {
      this.color = color;
      this.text = '';
      this.textColor = '';
    }
  
    setText(text) {
      this.text = text;
    }
  
    setTextColor(textColor) {
      this.textColor = textColor;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="100" cy="100" r="80" fill="${this.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect width="200" height="200" fill="${this.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="100,10 40,198 190,78 10,78 160,198" fill="${this.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
  }
  
  module.exports = { Circle, Square, Triangle };
  