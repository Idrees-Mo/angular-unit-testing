import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

// Angular uses Jasmine testing framework & Karma test runner 

// Unit suite
// In Jasmine, Describe method is used to create a unit suite 

describe("CalculatorService", () => {
  let calculatorService: CalculatorService;
  let loggerServiceSpy: any;

  // beforeEach => for intial setup
  // Before Each block is run before each specification / test 

  beforeEach(() => {

    // createSpyObj('service', ['method'])
    // To create spying object (LoggerService) with a method (print) 
    loggerServiceSpy = jasmine.createSpyObj("LoggerService", ["print"]);


    //Angular uses testBed instead of creating actual instance of dependecies like below
    // calculatorService = new CalculatorService(loggerServiceSpy); // don't use this
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        {
          provide: LoggerService,
          useValue: loggerServiceSpy,
        },
      ],
    });

    calculatorService = TestBed.inject(CalculatorService);
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


// Utility methods , x to disable, f to focus, before descript or it methods 