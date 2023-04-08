import { Component } from '@angular/core';

@Component({
  selector: 'app-what-percent-is-of',
  templateUrl: './what-percent-is-of.component.html',
  styleUrls: ['./what-percent-is-of.component.css']
})
export class WhatPercentIsOfComponent {
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

    let paragraphResult = document.querySelectorAll("result2");
    // add span to paragraph




// 4 decimal places only
    this.result = `${((value1 / value2) * 100)}` ;


    // remove trailing zeros and decimal point if no decimal places left after removing trailing zeros
    this.result = `${this.result.toString().replace(/(\.\d*?)0+$/, "$1")}%`;

  }  catch (error) {

    console.log(`Error: ${error}`)
  this.result = "?";

  }

  }


}
