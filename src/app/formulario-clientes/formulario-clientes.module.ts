import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioClientesComponent } from './formulario-clientes/formulario-clientes.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormularioClientesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[FormularioClientesComponent]
})
export class FormularioClientesModule { }
