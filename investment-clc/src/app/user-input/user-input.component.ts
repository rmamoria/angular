import { Component, EventEmitter, Output, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {type InvestmentInput } from "../investment-input.model";
import { InvestmentService } from "../investment.service";
@Component({
  selector: "app-user-input",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./user-input.component.html",
  styleUrl: "./user-input.component.css"
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();

  enteredInitialInvestment = "0";
  enteredAnnualInvestment = "0";
  enteredExpectedReturn = "0";
  enteredDuration = "0";

  private investmentService = inject(InvestmentService)

  OnSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment
    })
    console.log("submitted....");
  }
}
