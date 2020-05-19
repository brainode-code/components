import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorBoxComponent } from './color-box/color-box.component';
import { LabelComponent } from './label/label.component';



@NgModule({
  declarations: [ColorBoxComponent, LabelComponent],
  imports: [
    CommonModule
  ],
  exports: [ColorBoxComponent, LabelComponent]
})
export class AtomsModule { }
