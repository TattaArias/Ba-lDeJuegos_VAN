import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-mapa-politico',
  templateUrl: './mapa-politico.component.html',
  styleUrls: ['./mapa-politico.component.css']
})
export class MapaPoliticoComponent implements OnInit {

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
