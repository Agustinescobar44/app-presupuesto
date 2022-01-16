import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {

  nombreGasto= ""
  cantidadGastada= 0;

  nombreIncorrecto= false;
  cantidadIncorrecta= false;
  textoError = "a"


  constructor(private _presupuestoService: PresupuestoService) { }

  ngOnInit(): void {

  }

  enviarGasto(){
    this.nombreIncorrecto = !this.nombreGasto
    this.cantidadIncorrecta = !this.cantidadGastada || this.cantidadGastada > this._presupuestoService.restante || this.cantidadGastada<1;
  
    if(this.nombreIncorrecto || this.cantidadIncorrecta){
      this.asignarError();
      return;
    } 
    //crear objeto
    const GASTO = {
      nombre: this.nombreGasto,
      cantidad: this.cantidadGastada
    }
    // Enviar el objeto a los subs via subjet
    this._presupuestoService.agregarGasto(GASTO);
      

    //resetaear formulario
    this.nombreGasto= ""
    this.cantidadGastada= 0;
  }

  asignarError(){
    if(this.nombreIncorrecto) this.textoError = "El nombre es obligatorio";
    else if(this.cantidadGastada > this._presupuestoService.restante) this.textoError = "La cantidad es mayor a la cantidad restante"
    else this.textoError = "La cantidad es incorrecta"
  }
}
