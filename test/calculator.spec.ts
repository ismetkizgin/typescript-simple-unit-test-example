import CalculatorController from "../src/controllers/calculator";
import { assert } from "chai";

describe("Calculator Test", () => {
  it("Should return 5 when 2 is added to 3", () => {
    let calculator = new CalculatorController();
    assert.equal(calculator.addition(3, 2), 5);
  });
});
