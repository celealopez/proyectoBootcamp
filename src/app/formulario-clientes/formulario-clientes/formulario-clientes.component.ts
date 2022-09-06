import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-formulario-clientes',
  templateUrl: './formulario-clientes.component.html',
  styleUrls: ['./formulario-clientes.component.css']
})

export class FormularioClientesComponent implements OnInit {

  miFormulario: FormGroup=this.fb.group({
    name: this.fb.control('nombre desde rf'),
    cuit: this.fb.control('nombre desde rf'),
    date: this.fb.control(Date())
   
  })
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
