import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-aspecto-fisico',
  templateUrl: './aspecto-fisico.component.html',
  styleUrls: ['./aspecto-fisico.component.css']
})
export class AspectoFisicoComponent implements OnInit {

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
