import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { PacUiModule } from '@pulse/pac-ui';
import { PicUiModule } from '@pulse/pic-ui';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NxModule.forRoot(), PacUiModule, PicUiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
