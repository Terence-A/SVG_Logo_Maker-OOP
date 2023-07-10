class ShapeColor {
  constructor() {
    this.color = "";
  }
  setShapeColor(shapeColor) {
    this.color = shapeColor;
  }
}

// Circle class wiht inheritence
class Circle extends ShapeColor {
  render() {
    return `<circle r="120" cx="125" cy="125" fill="${this.shapeColor}" />`;
  }
}

// Triangle class wiht inheritence
class Triangle extends ShapeColor {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
}

// Square class with inheritence
class Square extends ShapeColor {
  render() {
    return `<rect x="25" y=25" height="200" width="200" fill="${this.shapeColor}" />`;
  }
}

// Export modules
module.exports = { Circle, Triangle, Square };
