import { CalculatorService } from "./calculator.service";

fdescribe("CalculatorService", () => {
  let calculatorService: CalculatorService;
  let loggerServiceSpy: any;

  beforeEach(() => {
    loggerServiceSpy = jasmine.createSpyObj("LoggerService", ["print"]);
    calculatorService = new CalculatorService(loggerServiceSpy);
  });

  // Testing add function on calculator service
  it("should add two numbers", () => {
    const result = calculatorService.add(2, 2);

    expect(result).toBe(4, "unexpected add function resutl");

    // check print method is being called
    expect(loggerServiceSpy.print).toHaveBeenCalled();
    // check print method is being called only once
    expect(loggerServiceSpy.print).toHaveBeenCalledTimes(1);
  });

  // Testing substract function on calculator service
  it("should substrat two numbers", () => {
    const result = calculatorService.substract(2, 2);

    expect(result).toBe(0, "unexpected substraction result");
    // check print method is being called
    expect(loggerServiceSpy.print).toHaveBeenCalled();
    // check print method is being called only once
    expect(loggerServiceSpy.print).toHaveBeenCalledTimes(1);
  });
});
