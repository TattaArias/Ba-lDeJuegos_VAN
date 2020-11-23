import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-mapa-hidrografia',
  templateUrl: './mapa-hidrografia.component.html',
  styleUrls: ['./mapa-hidrografia.component.css']
})
export class MapaHidrografiaComponent implements OnInit {

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
