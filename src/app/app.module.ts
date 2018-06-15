import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TlcInputComponent } from './commons/tlc-input/tlc-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TlcInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
