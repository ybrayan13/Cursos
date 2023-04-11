import { Component, Input, SimpleChanges } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styles: [],
})
export class CabeceraComponent {
  @Input() productos: Producto[] = [];

  cantProductos: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.cantProductos = this.productos.filter(
      (item: Producto) => item.cantidadSolicitada > 0
    ).length;
  }
}
