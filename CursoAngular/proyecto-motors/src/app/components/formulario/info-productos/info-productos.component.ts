import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-info-productos',
  templateUrl: './info-productos.component.html',
  styles: [],
})
export class InfoProductosComponent {
  productos: any[] = [];
  proveedores: string[] = [];

  constructor(private _productoService: ProductoService) {
    this.productos = this._productoService.getProducto();
    this.proveedores = this._productoService.getProveedor();
  }
}
