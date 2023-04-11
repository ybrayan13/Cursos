import { Component, OnInit } from '@angular/core';
import { Producto } from './interfaces/producto.interface';
import { ProductoService } from './services/producto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pdp-taller-1';
  productos: Producto[];
  constructor(private _productoService: ProductoService) {
    this.productos = _productoService.getProductos();
  }

  procesaPropagar(e: Producto) {
    // console.warn(e);
    console.warn('N-2');
    this.productos = this.productos.map((item: Producto) => {
      if (item.id == e.id) {
        return { ...item, cantidadSolicitada: item.cantidadSolicitada + 1 };
      } else {
        return item;
      }
    });
    console.log(this.productos);
    console.warn(
      this.productos.filter((item: Producto) => item.cantidadSolicitada > 0)
        .length
    );
  }
}
