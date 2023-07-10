// import shape classes
const { describe } = require("yargs");
const { Circle, Triangle, Square } = require("./shapes");

// Testing for blue triangle
describe("Triange test", () => {
  test("Test for Triange with blue background", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

// Testing for red Circle
describe("Circle test", () => {
  test("Test for Circle with red backgroung", () => {
    const shape = new Circle();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      `<circle r="80" cx="150" cy="115" fill="${this.color}" />`
    );
  });
});
