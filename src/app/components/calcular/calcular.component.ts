import { Component, Input, OnInit } from '@angular/core';
import { CalcServiceService } from 'src/app/services/calc-service.service';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.css']
})
export class CalcularComponent {

  @Input() valor1:number = 0;
  @Input() valor2:number = 0;


  constructor(private servicio:CalcServiceService){ }

  public suma():void
	{
		this.servicio.suma(this.valor1,this.valor2);
	}

	public Multiplicacion():void
	{
		this.servicio.Multiplicacion(this.valor1,this.valor2);
	}

	public Resta():void
	{
		this.servicio.Resta(this.valor1,this.valor2);
	}

	public Division():void
	{
		this.servicio.Division(this.valor1,this.valor2);
	}

	public RaizCuadrada():void
	{
		this.servicio.RaizCuadrada(this.valor1);
  }

    LimpiarCampos():void
    {
      this.valor1 = 0;
      this.valor2 = 0;
    }

}
