import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { PicUiModule } from '@pulse/pic-ui';
import { PscUiModule } from '@pulse/psc-ui';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NxModule.forRoot(), PicUiModule,PscUiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
