import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientesList: Array <any>=[]
  constructor(private http:HttpClient) { }

  getList(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }
}
