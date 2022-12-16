import { CalculatorService } from "./calculator.service";

fdescribe("CalculatorService", () => {
  // Testing add function on calculator service
  it("should add two numbers", () => {
    const loggerService = jasmine.createSpyObj("LoggerService", ["print"]);
    // sypying on print method of logger service

    const calculator = new CalculatorService(loggerService);
    const result = calculator.add(2, 2);

    expect(result).toBe(4, "unexpected add function resutl");

    // check print method is being called
    expect(loggerService.print).toHaveBeenCalled();
    // check print method is being called only once
    expect(loggerService.print).toHaveBeenCalledTimes(1);
  });

  // Testing substract function on calculator service
  it("should substrat two numbers", () => {
    const loggerService = jasmine.createSpyObj("LoggerService", ["print"]);
    // sypying on print method of logger service

    const calculator = new CalculatorService(loggerService);
    const result = calculator.substract(2, 2);

    expect(result).toBe(0, "unexpected substraction result");
    // check print method is being called
    expect(loggerService.print).toHaveBeenCalled();
    // check print method is being called only once
    expect(loggerService.print).toHaveBeenCalledTimes(1);
  });
});
