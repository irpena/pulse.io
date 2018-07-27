import { Component, Input, Output, EventEmitter, forwardRef, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { BdbMaskProvider } from '../providers/bdb-mask/bdb-mask';

@Component({
  selector: 'bdb-phone-input',
  template:
  `
  <input
  class="input-item"
  type="tel"
  [placeholder]="placeHolder"
  (input)="onInputChange($event)"
  [value]="inputValue"
  [textMask]="{mask: customMask, guide: false}"
  >
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BdbPhoneInputComponent),
      multi: true
    }
  ]
})
export class BdbPhoneInputComponent implements ControlValueAccessor, OnInit {

  inputValue = '';
  customMask;

  @Input() placeHolder: string;
  @ViewChild('input') inputElement: ElementRef;

  propagateChange = (_: any) => { };

  constructor(
    private bdbMask: BdbMaskProvider,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.customMask = this.bdbMask.maskToPhone();
  }

  setDisabledState(isDisabled: boolean) {
    this.renderer.setProperty(this.inputElement.nativeElement, 'disabled', isDisabled);
    // disable other components here
  }

  onInputChange(event) {
    this.inputValue = event.target.value;
    this.propagateChange(this.bdbMask.unmaskToPlainString(this.inputValue));
  }

  writeValue(value: number) {
    if (value !== undefined && value !== null && value.toString() !== '') {
      this.inputValue = value.toString();
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {

  }

}
