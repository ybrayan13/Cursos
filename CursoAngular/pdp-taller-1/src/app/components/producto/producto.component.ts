import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: [],
})
export class ProductoComponent {
  @Input() productos: Producto[];
  @Output() propagar = new EventEmitter<Producto>();

  agregarProducto(e: Producto) {
    console.log(e);
    // console.warn('N-1');
    if (e.cantidadSolicitada < e.cantidadDisponible) {
      this.propagar.emit(e);
    } else {
      console.warn('sin Stock');
    }
  }
}
