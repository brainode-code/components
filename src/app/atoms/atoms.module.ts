import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorBoxComponent } from './color-box/color-box.component';
import { LabelComponent } from './label/label.component';
import { SwitchComponent } from './switch/switch.component';



@NgModule({
  declarations: [ColorBoxComponent, LabelComponent, SwitchComponent],
  imports: [
    CommonModule
  ],
  exports: [ColorBoxComponent, LabelComponent, SwitchComponent]
})
export class AtomsModule { }
