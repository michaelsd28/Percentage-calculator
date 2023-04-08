import { Component } from '@angular/core';

@Component({
  selector: 'app-what-percentage-of',
  templateUrl: './what-percentage-of.component.html',
  styleUrls: ['./what-percentage-of.component.css']
})
export class WhatPercentageOfComponent {
  firstNumber: number | string = "";
  secondNumber: number | string = "";
  result: string | number = "?";

  setFirstNumber(value: number | string) {
    this.firstNumber = value;
    if (this.firstNumber === 0 || this.secondNumber === 0) {
      this.result = "?";
      return;
    }
  }

  setSecondNumber(value: number | string) {
    this.secondNumber = value;

  }

  calculatePercentage() {

    try {
    const value1 = parseFloat(this.firstNumber.toString());
    const value2 = parseFloat(this.secondNumber.toString());
    if (this.firstNumber === 0 || this.secondNumber === 0 || this.secondNumber === "" || this.firstNumber === "") {
      this.result = "?";
      return;
    }

    this.result = (value1 / 100) * value2  ;






    
    this.result = this.result.toString().replace(/(\.\d*?)0+$/, "$1");
  }  catch (error) {

    console.log(`Error: ${error}`)
  this.result = "?";

  }

  }


}
