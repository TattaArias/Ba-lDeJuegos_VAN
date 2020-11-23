import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-mapa-orografia',
  templateUrl: './mapa-orografia.component.html',
  styleUrls: ['./mapa-orografia.component.css']
})
export class MapaOrografiaComponent implements OnInit {

  tipoPais: string = '' ;
  nombrePais: string = '' ;
    
  constructor(private PaisesService: PaisesService) { 
    this.consultarDatos();
  }
  
  consultarDatos(){
    this.nombrePais = this.PaisesService.consultarNombrePais();
    this.tipoPais = this.PaisesService.consultarTipoPais();
  }

  ngOnInit(): void {
  }


}
