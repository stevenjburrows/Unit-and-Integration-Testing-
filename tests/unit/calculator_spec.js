var Calculator = require("../../public/js/calculator.js");
var assert = require("assert");

describe("calculator", function () {
  beforeEach(function () {
    calculator = new Calculator();
  });

  // write unit tests here in the form of "it should do something..."
  it("it has a sample test", function () {
    assert.equal(true, true);
  });

  it("it can add", function () {
    calculator.numberClick(1);
    calculator.operatorClick("+");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    assert.equal(5, calculator.runningTotal);
  });

  it("it can subrtract", function () {
    calculator.numberClick(7);
    calculator.operatorClick("-");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    assert.equal(3, calculator.runningTotal);
  });

  it("it can multiply", function () {
    calculator.numberClick(5);
    calculator.operatorClick("*");
    calculator.numberClick(3);
    calculator.operatorClick("=");
    assert.equal(15, calculator.runningTotal);
  });

  it("it can divide", function () {
    calculator.numberClick(21);
    calculator.operatorClick("/");
    calculator.numberClick(7);
    calculator.operatorClick("=");
    assert.equal(3, calculator.runningTotal);
  });

  it("it can subrtract", function () {
    calculator.numberClick(7);
    calculator.operatorClick("-");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    assert.equal(3, calculator.runningTotal);
  });
  it("it can concatenate multiple number button clicks", function () {
    calculator.numberClick(1);
    calculator.numberClick(2);
    assert.equal(12, calculator.runningTotal);
  });
  it("it can chain multiple operations together", function () {
    calculator.numberClick(5);
    calculator.operatorClick("+");
    calculator.numberClick(5);
    calculator.operatorClick("*");
    calculator.numberClick(3);
    calculator.operatorClick("=");
    assert.equal(30, calculator.runningTotal);
  });
  it("it can clear the running total without affecting the calculation", function () {
    calculator.numberClick(5);
    calculator.operatorClick("*");
    calculator.numberClick(3);
    calculator.operatorClick("=");
    calculator.clearClick()
    assert.equal(0, calculator.runningTotal);
  });
});
