import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

fdescribe("CalculatorService", () => {
  // Testing add function on calculator service
  it("should add two numbers", () => {
    const loggerService = new LoggerService();
    // sypying on print method of logger service
    spyOn(loggerService, "print");

    const calculator = new CalculatorService(loggerService);
    const result = calculator.add(2, 2);

    expect(result).toBe(4);
    // check print method is being called only once
    expect(loggerService.print).toHaveBeenCalledTimes(1);
  });

  // Testing substract function on calculator service
  it("should substrat two numbers", () => {
    const loggerService = new LoggerService();
    // sypying on print method of logger service
    spyOn(loggerService, "print");

    const calculator = new CalculatorService(new LoggerService());
    const result = calculator.substract(2, 2);

    expect(result).toBe(0);
    // check print method is being called only once
    expect(loggerService.print).toHaveBeenCalledTimes(1);
  });
});
