import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-escudo',
  templateUrl: './escudo.component.html',
  styleUrls: ['./escudo.component.css']
})
export class EscudoComponent implements OnInit {

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