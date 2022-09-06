import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioClientesModule } from './formulario-clientes/formulario-clientes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormularioClientesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
