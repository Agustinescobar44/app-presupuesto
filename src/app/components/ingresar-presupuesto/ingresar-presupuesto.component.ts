import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.css']
})
export class IngresarPresupuestoComponent implements OnInit {

  ingresoInvalido = false

  presupuesto:number;

  constructor(private _presupuestoService:PresupuestoService,private router:Router) { 
    this.presupuesto = 0;
  }

  ngOnInit(): void {
  }
  ingresar(){
    this.ingresoInvalido = this.presupuesto <= 0 || !this.presupuesto
    if(!this.ingresoInvalido){
      this._presupuestoService.presupuesto = this.presupuesto;
      this._presupuestoService.restante = this.presupuesto;
      this.router.navigate(['gastos'])
    }
    
  }
}
