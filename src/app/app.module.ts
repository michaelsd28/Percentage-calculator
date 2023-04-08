import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputTemplateComponent } from './components/input-template/input-template.component';
import { ContainerComponent } from './components/container/container.component';
import { WhatPercentageOfComponent } from './components/what-percentage-of/what-percentage-of.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InputTemplateComponent,
    ContainerComponent,
    WhatPercentageOfComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
