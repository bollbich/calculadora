import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PadrecalcComponent } from './components/padrecalc/padrecalc.component';
import { CalcularComponent } from './components/calcular/calcular.component';
import { MostrarResultadoComponent } from './components/mostrar-resultado/mostrar-resultado.component';
import { CalcularModule } from './modules/calcular.module';
import { MostrarResultadoModule } from './modules/mostrar-resultado.module';
import { PadrecalcModule } from './modules/padrecalc.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PadrecalcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
