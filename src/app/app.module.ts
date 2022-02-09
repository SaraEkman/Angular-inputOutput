import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrintAnimalComponent } from './components/print-animal/print-animal.component';
import { PrintAnimalsComponent } from './components/print-animals/print-animals.component';

@NgModule({
  declarations: [
    AppComponent,
    PrintAnimalComponent,
    PrintAnimalsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
