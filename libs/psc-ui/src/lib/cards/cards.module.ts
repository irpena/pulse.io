import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopCardComponent } from './workshop-card/workshop-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WorkshopCardComponent],
  exports: [WorkshopCardComponent]
})
export class CardsModule { }
