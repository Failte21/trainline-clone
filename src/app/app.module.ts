import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TlcInputComponent } from './commons/tlc-input/tlc-input.component';
import { MainFormComponent } from './main-form/main-form.component';
import { SideAdComponent } from './side-ad/side-ad.component';
import { SideAutocompleteComponent } from './side-autocomplete/side-autocomplete.component';
import { SideCalendarComponent } from './side-calendar/side-calendar.component';
import { SidePersonComponent } from './side-person/side-person.component';
import { InputFocusDirective } from './input-focus.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AutocompleteInputDirective } from './autocomplete-input.directive';
import {MatDatepickerModule} from '@angular/material';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import { ListNavigatorDirective } from './list-navigator.directive';

@NgModule({
  declarations: [
    AppComponent,
    TlcInputComponent,
    MainFormComponent,
    SideAdComponent,
    SideAutocompleteComponent,
    SideCalendarComponent,
    SidePersonComponent,
    InputFocusDirective,
    AutocompleteInputDirective,
    ListNavigatorDirective,
],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
