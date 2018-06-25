import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from './buttons/buttons.module';
@NgModule({
  imports: [CommonModule,
    ButtonsModule
  ],
  exports: [
    ButtonsModule
  ]
})
export class PacUiModule {}
