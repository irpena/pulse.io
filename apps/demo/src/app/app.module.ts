import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { PicUiModule } from '@pulse/pic-ui';
import { PscUiModule } from '@pulse/psc-ui';
import { BdbInputsModule } from '../../../../libs/bdb-inputs/src';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NxModule.forRoot(), PicUiModule,PscUiModule, BdbInputsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
