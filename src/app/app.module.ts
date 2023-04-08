import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputTemplateComponent } from './components/input-template/input-template.component';
import { ContainerComponent } from './components/container/container.component';
import { WhatPercentageOfComponent } from './components/what-percentage-of/what-percentage-of.component';
import { FormsModule } from '@angular/forms';
import { WhatPercentIsOfComponent } from './components/what-percent-is-of/what-percent-is-of.component';
import { FromToComponent } from './components/from-to/from-to.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTemplateComponent,
    ContainerComponent,
    WhatPercentageOfComponent,
    WhatPercentIsOfComponent,
    FromToComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
