const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;

describe("calculator functionality", function () {
  beforeEach(function () {
    browser.ignoreSynchronization = true;
    browser.get("http://localhost:3000");
  });

  // write integration tests here in the form of "it should do something..."
  it("should have working number buttons", function () {
    running_total = element(by.css("#running_total"));
    element(by.css("#number2")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("2");
  });

  it("should add two numbers", function () {
    running_total = element(by.css("#running_total"));
    element(by.css("#number1")).click();
    element(by.css("#operator_add")).click();
    element(by.css("#number4")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("5");
  });

  it("should perform multiple operations be chained together", function () {
    running_total = element(by.css("#running_total"));
    element(by.css("#number1")).click();
    element(by.css("#operator_add")).click();
    element(by.css("#number4")).click();
    element(by.css("#operator_multiply")).click();
    element(by.css("#number5")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("25");
  });

  it("should allow negative numbers", function () {
    running_total = element(by.css("#running_total"));
    element(by.css("#number1")).click();
    element(by.css("#operator_subtract")).click();
    element(by.css("#number5")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("-4");
  });

  it("should allow large numbers", function () {
    running_total = element(by.css("#running_total"));
    element(by.css("#number1")).click();
    element(by.css("#number0")).click();
    element(by.css("#number0")).click();
    element(by.css("#number0")).click();
    element(by.css("#number0")).click();
    element(by.css("#operator_multiply")).click();
    element(by.css("#number5")).click();
    element(by.css("#number0")).click();
    element(by.css("#number0")).click();
    element(by.css("#number0")).click();
    element(by.css("#number0")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal(
      "500000000"
    );
  });

  it("should allow decimal numbers", function () {
    running_total = element(by.css("#running_total"));
    element(by.css("#number5")).click();
    element(by.css("#operator_divide")).click();
    element(by.css("#number2")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("2.5");
  });

  it("should divide by 0", function () {
    running_total = element(by.css("#running_total"));
    element(by.css("#number5")).click();
    element(by.css("#operator_divide")).click();
    element(by.css("#number0")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("Error");
  });


});
