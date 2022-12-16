// import { TestBed } from '@angular/core/testing';

import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

fdescribe("CalculatorService", () => {
  let service: CalculatorService;

  // ******** commented out the default beforEach **********
  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(CalculatorService);
  // });

  // it("should be created", () => {
  //   expect(service).toBeTruthy();
  // });
  //  ************************************************************

  it("should add two numbers", () => {
    const calculator = new CalculatorService(new LoggerService());

    const result = calculator.add(2, 2);

    expect(result).toBe(4);
  });

  it("should substrat two numbers", () => {
    const calculator = new CalculatorService(new LoggerService());

    const result = calculator.substract(2, 2);

    expect(result).toBe(0);
  });
});
