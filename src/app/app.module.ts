import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AtomsModule } from './atoms/atoms.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AtomsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
