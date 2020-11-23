import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-bandera',
  templateUrl: './bandera.component.html',
  styleUrls: ['./bandera.component.css']
})
export class BanderaComponent implements OnInit {

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
