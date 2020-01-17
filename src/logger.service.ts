import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() {
  
   }

   logCount: number = 0;

   log(msg: any) : void {
    this.logCount++;
    console.log(msg, `You have now logged ${this.logCount} times. Have a great day!`)
  }
}
