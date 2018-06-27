import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './buttons/button/button.component';
import { CardsModule } from './cards/cards.module';
@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent],
  exports: [CardsModule]
  
})
export class PscUiModule {}
