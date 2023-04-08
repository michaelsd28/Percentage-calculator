import { Component } from '@angular/core';

@Component({
  selector: 'app-from-to',
  templateUrl: './from-to.component.html',
  styleUrls: ['./from-to.component.css']
})
export class FromToComponent {
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
    this.result= ((value2 - value1)/value1)*100

    if (this.firstNumber === 0 || this.secondNumber === 0 || this.secondNumber === "" || this.firstNumber === "") {
      this.result = "?";
      return;
    }




    // remove trailing zeros and decimal point if no decimal places left after removing trailing zeros
    this.result = `${this.result.toString().replace(/(\.\d*?)0+$/, "$1")}%`;

  }  catch (error) {

    console.log(`Error: ${error}`)
  this.result = "?";

  }

  }


}
