import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  isCompleted = false;

  constructor() { }

  ngOnInit() {
  }

  onStepPersonalDataNext(event){

  }
  onStepAndressDataNext(event){

  }
  onStepPaymentDataNext(event){
    
  }

  onComplete(event){
    this.isCompleted = true;
  }

}
