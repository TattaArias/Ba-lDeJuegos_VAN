import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-coordenadas-geograficas',
  templateUrl: './coordenadas-geograficas.component.html',
  styleUrls: ['./coordenadas-geograficas.component.css']
})
export class CoordenadasGeograficasComponent implements OnInit {

  tipoPais: string = '' ;
  nombrePais: string = '' ;
  numeroPais : number = 0 ;

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
