import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnInit, OnDestroy {
  suscription: Subscription;
  presupuesto:number;
  restante:number;
  listaGastos: any[] = []

  constructor(private _presupuestoServicio: PresupuestoService) { 
      this.suscription = this._presupuestoServicio.getGastos().subscribe(gasto =>{
        this.listaGastos.push(gasto)
        this.restante = _presupuestoServicio.restante;
      })
      this.presupuesto = _presupuestoServicio.presupuesto;
      this.restante = _presupuestoServicio.restante;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this.suscription.unsubscribe();
  }

  aplicarColorRestante():string{
    if(this.presupuesto/4 >this.restante){
      return "alert alert-danger animar";
    }
    else if(this.presupuesto/2 > this.restante){
      return "alert alert-warning"
    }
    return "alert alert-secondary"
  }
}
