import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  presupuesto:number;
  restante:number;

  constructor(public _presupuestoService:PresupuestoService, private router:Router) { 
    this.presupuesto=_presupuestoService.presupuesto;
    this.restante = _presupuestoService.restante;
  }

  ngOnInit(): void {
    if(this._presupuestoService.presupuesto === 0 )this.router.navigate(['/ingresarPresupuesto'])
    
  }

}
