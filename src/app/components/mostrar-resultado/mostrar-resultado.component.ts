import { Component, Input, OnInit } from '@angular/core';
import { CalcServiceService } from 'src/app/services/calc-service.service';

@Component({
  selector: 'app-mostrar-resultado',
  templateUrl: './mostrar-resultado.component.html',
  styleUrls: ['./mostrar-resultado.component.css']
})
export class MostrarResultadoComponent {

  constructor(public servicio:CalcServiceService){}
}
