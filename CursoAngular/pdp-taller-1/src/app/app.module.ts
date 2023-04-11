import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ResumenProductoComponent } from './components/resumen-producto/resumen-producto.component';
import { ShoppingCartItemComponent } from './components/resumen-producto/shopping-cart-item/shopping-cart-item.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ProductoService } from './services/producto.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ProductoComponent,
    ResumenProductoComponent,
    ShoppingCartItemComponent,
    SummaryComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [ProductoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
