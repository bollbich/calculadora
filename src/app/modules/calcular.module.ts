import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcularComponent } from '../components/calcular/calcular.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations:[
CalcularComponent
  ],
  exports:[
CalcularComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CalcularModule { }
