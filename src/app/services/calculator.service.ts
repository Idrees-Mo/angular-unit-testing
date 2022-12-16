import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable({
  providedIn: "root",
})
export class CalculatorService {
  constructor(private logger: LoggerService) {}

  add(a: number, b: number): number {
    this.logger.print("add function has been called!");
    return a + b;
  }

  substract(a: number, b: number): number {
    this.logger.print("add function has been called!");
    return a - b;
  }
}
