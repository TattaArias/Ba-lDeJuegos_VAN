import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-generalidad',
  templateUrl: './generalidad.component.html',
  styleUrls: ['./generalidad.component.css']
})
export class GeneralidadComponent implements OnInit {

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
