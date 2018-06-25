import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsModule } from './cards/cards.module';

@NgModule({
  imports: [CommonModule,
    CardsModule],
  exports: [CardsModule]
})

export class PicUiModule {}
