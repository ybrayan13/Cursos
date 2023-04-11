import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-resumen-producto',
  templateUrl: './resumen-producto.component.html',
  styles: [],
})
export class ResumenProductoComponent {
  @Input() productos: Producto[];
}
