import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable({
  providedIn: "root",
})
export class CalculatorService {
  constructor(logger: LoggerService) {}

  add(a: number, b: number): number {
    return a + b;
  }

  substract(a: number, b: number): number {
    return a - b;
  }
}
