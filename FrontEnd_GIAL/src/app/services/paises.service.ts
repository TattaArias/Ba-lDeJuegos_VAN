import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  
  nombrePais: string = '';
  tipoPais: string = '';
  
  constructor(private http: HttpClient) { 
  }
  
  getAllPaises(): Observable<{}>{
    return this.http.get(environment.urlPaises, httpOptions);
  }
  
  guargarNombrePais(nombrePais){
    this.nombrePais = nombrePais ;
  }
  
  guargarTipo(tipoPais){
    this.tipoPais = tipoPais ;
    console.log("Servicio: ", this.tipoPais);
  }

  consultarNombrePais(){
    return this.nombrePais;
  }

  consultarTipoPais(){
    return this.tipoPais;
  }
  
}
