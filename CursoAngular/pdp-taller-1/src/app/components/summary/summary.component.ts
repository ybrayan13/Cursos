import { Component, Input, SimpleChanges } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styles: [],
})
export class SummaryComponent {
  @Input() productos: Producto[] = [];
  cupon = 0;
  subTotal = 0;
  total = 0;

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.subTotal = this.productos.reduce((pre, acu) => {
      return (pre = pre + acu.cantidadSolicitada * acu.precio);
    }, 0);
    this.total = this.subTotal - this.cupon;
  }

  recalcular() {
    this.subTotal = this.productos.reduce((pre, acu) => {
      return (pre = pre + acu.cantidadSolicitada * acu.precio);
    }, 0);
    this.total = this.subTotal - this.cupon;
  }
}
