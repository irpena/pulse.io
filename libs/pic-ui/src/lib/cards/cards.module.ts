import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankCardComponent } from './bank-card/bank-card.component';
import { IonicModule } from 'ionic-angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [BankCardComponent],
  exports: [
    BankCardComponent
  ]
})
export class CardsModule { }
