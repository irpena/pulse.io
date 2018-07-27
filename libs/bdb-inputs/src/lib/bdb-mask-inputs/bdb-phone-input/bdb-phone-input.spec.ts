import { } from 'jasmine';
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { BdbPhoneInputComponent } from './bdb-phone-input';
import { BdbMaskProvider } from '../../../providers/bdb-mask/bdb-mask';
import { TextMaskModule } from 'angular2-text-mask';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('bdb phone input test suite', () => {
    let component: BdbPhoneInputComponent;
    let fixture: ComponentFixture<BdbPhoneInputComponent>;
    let inputEl: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                BdbPhoneInputComponent
            ],
            providers: [
                BdbMaskProvider
            ],
            imports: [
                TextMaskModule
            ]
        });

        fixture = TestBed.createComponent(BdbPhoneInputComponent);
        // get test component from the fixture
        component = fixture.componentInstance;
        inputEl = fixture.debugElement.query(By.css('.input-item'));
    });

    it('should be defined', () => {
        expect(BdbPhoneInputComponent).toBeDefined();
    });
});