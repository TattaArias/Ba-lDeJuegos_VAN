import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../services/paises.service';


declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const RoutesConsultarMapas: RouteInfo[] = [
  { path: '/mapaFisico',      title: 'Fisico',      icon: 'pe-7s-photo',    class: '' },
  { path: '/mapaHidrografia', title: 'Hidrografia', icon: 'fa pe-7s-sun',   class: '' },
  { path: '/mapaOrografia',   title: 'Orografia',   icon: 'fa pe-7s-map-2', class: '' },
  { path: '/mapaPolitico',    title: 'Politico',    icon: 'fa pe-7s-drop',  class: '' },
];

export const RoutesConsultarTextos: RouteInfo[] = [
  { path: '/dashboard', title: 'Consultar Mapas',  icon: 'pe-7s-map', class: '' },
];

export const RoutesTemasInteresantes: RouteInfo[] = [
  { path: '/dashboard', title: 'Consultar Mapas',  icon: 'pe-7s-map', class: '' },
];

export const RoutesCuriosear: RouteInfo[] = [
  { path: '/dashboard', title: 'Consultar Mapas',  icon: 'pe-7s-map', class: '' },
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  //menuItems: any[];
  menuConsultarMapas: any[];
  menuConsultarTextos: any[];
  menuTemasInteresantes: any[];
  menuCuriosear: any[];
  
  listaPaises;
  
  nombrePais : string = '' ;

  constructor(private PaisesService: PaisesService) { 
    this.getAllPaises();
  }

  getAllPaises(){
    this.PaisesService.getAllPaises().subscribe( misPaisesObs => {
      this.listaPaises = misPaisesObs['data'];      
    });
  }
  guardarPais(element){
    this.nombrePais = this.listaPaises[element].nombrePais;
    this.PaisesService.guargarNombrePais(this.nombrePais);
  }
  guardarTipo(element){
    this.PaisesService.guargarTipo(element);
    this.guardarPais(this.nombrePais);
    console.log("Entra guardar: ", this.nombrePais);
  }
    
  ngOnInit() {
    this.menuConsultarMapas = RoutesConsultarMapas.filter(menuConsultarMapas => menuConsultarMapas);
    this.menuConsultarTextos = RoutesConsultarTextos.filter(menuConsultarTextos => menuConsultarTextos);
    this.menuTemasInteresantes = RoutesTemasInteresantes.filter(menuTemasInteresantes => menuTemasInteresantes);
    this.menuCuriosear = RoutesCuriosear.filter(menuCuriosear => menuCuriosear);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
