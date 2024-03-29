import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoggerService {
  constructor() {}

  print(message: string) {
    console.warn(message);
  }
}
