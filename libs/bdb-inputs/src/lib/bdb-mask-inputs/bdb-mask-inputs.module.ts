import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from './test-component/test-component.component';
import { BdbCurrencyInputComponent } from './bdb-currency-input/bdb-currency-input';
import { BdbPhoneInputComponent } from './bdb-phone-input/bdb-phone-input';
import { BdbMaskProvider } from './providers/bdb-mask/bdb-mask';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    CommonModule,
    BdbCurrencyInputComponent,
    BdbPhoneInputComponent,
    BdbMaskProvider,
    TextMaskModule
  ],
  declarations: [TestComponentComponent],
  exports: [
    BdbCurrencyInputComponent,
    BdbPhoneInputComponent,
    BdbMaskProvider,
    TextMaskModule
  ]
})
export class BdbMaskInputsModule { }
