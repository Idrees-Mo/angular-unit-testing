import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

fdescribe("CalculatorService", () => {
  // Testing add function on calculator service
  it("should add two numbers", () => {
    const calculator = new CalculatorService(new LoggerService());

    const result = calculator.add(2, 2);
    expect(result).toBe(4);
  });

  // Testing substract function on calculator service
  it("should substrat two numbers", () => {
    const calculator = new CalculatorService(new LoggerService());

    const result = calculator.substract(2, 2);
    expect(result).toBe(0);
  });
});
