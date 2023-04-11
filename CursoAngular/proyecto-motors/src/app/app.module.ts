import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { InfoDocumentoComponent } from './components/formulario/info-documento/info-documento.component';
import { InfoReceptorComponent } from './components/formulario/info-receptor/info-receptor.component';
import { InfoProductosComponent } from './components/formulario/info-productos/info-productos.component';
import { InfoTotalComponent } from './components/formulario/info-total/info-total.component';
import { InfoIncotermComponent } from './components/formulario/info-incoterm/info-incoterm.component';
import { InfoPersonalizadosComponent } from './components/formulario/info-personalizados/info-personalizados.component';
import { InfoReferenciaComponent } from './components/formulario/info-referencia/info-referencia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    InicioComponent,
    FormularioComponent,
    InfoDocumentoComponent,
    InfoReceptorComponent,
    InfoProductosComponent,
    InfoTotalComponent,
    InfoIncotermComponent,
    InfoPersonalizadosComponent,
    InfoReferenciaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
