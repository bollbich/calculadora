import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadrecalcComponent } from '../components/padrecalc/padrecalc.component';
import { FormsModule } from '@angular/forms';
import { CalcularModule } from './calcular.module';
import { MostrarResultadoModule } from './mostrar-resultado.module';




@NgModule({
  declarations:[
    PadrecalcComponent
      ],
      exports:[
        PadrecalcComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        CalcularModule,
        MostrarResultadoModule
      ]
})
export class PadrecalcModule { }
