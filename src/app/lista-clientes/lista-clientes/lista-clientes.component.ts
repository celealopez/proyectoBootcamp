import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../service/clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  constructor(private clientesService: ClientesService) {
    clientesService.getList().subscribe((res:any)=>{
      console.log(res)
    })
   }

  ngOnInit(): void {
  }

}
