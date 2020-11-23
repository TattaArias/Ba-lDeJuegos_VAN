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

export const RoutesPoblacion: RouteInfo[] = [
  { path: '/generalidad',     title: 'Generalidad',    icon: 'fa pe-7s-users',      class: '' },
  { path: '/region',          title: 'Region',         icon: 'fa pe-7s-umbrella',   class: '' },
  { path: '/aspectoFisico',   title: 'Aspecto Fisico', icon: 'fa pe-7s-news-paper', class: '' },
  { path: '/tendencias',      title: 'Tendencias',     icon: 'fa pe-7s-news-paper', class: '' },
];

export const RoutesInformacionGeneral: RouteInfo[] = [
  { path: '/generalidadPoblacion', title: 'Generalidad',     icon: 'pe-7s-map', class: '' },
  { path: '/breveHistoria',        title: 'Breve Historia',  icon: 'pe-7s-map', class: '' },
  { path: '/demografia',           title: 'Demografia',      icon: 'pe-7s-map', class: '' },
  { path: '/gobierno',             title: 'Gobierno',        icon: 'pe-7s-map', class: '' },
  { path: '/economia',             title: 'Economia',        icon: 'pe-7s-map', class: '' },
  { path: '/cultura',              title: 'Cultura',         icon: 'pe-7s-map', class: '' },
];

export const RoutesDatosCuriosos: RouteInfo[] = [
  { path: '/escudo',               title: 'Escudo',          icon: 'pe-7s-map', class: '' },
  { path: '/bandera',              title: 'Bandera',         icon: 'pe-7s-map', class: '' },
  { path: '/himno',                title: 'Himno',           icon: 'pe-7s-map', class: '' },
  { path: '/video',                title: 'Video',           icon: 'pe-7s-map', class: '' },
];

export const RoutesCuriosear: RouteInfo[] = [
  { path: '/dashboard', title: 'Consultar Mapas',  icon: 'pe-7s-map', class: '' },
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuConsultarMapas: any[];
  menuPoblacion: any[];
  menuInformacionGeneral: any[];
  menuDatosCuriosos: any[];
  

  menuCuriosear: any[];
  
  listaPaises;
  nombrePais : string = '' ;
  numeroPais : number = 0 ;

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
    this.numeroPais = this.listaPaises[element].idPais ;
    this.PaisesService.guargarNombrePais(this.numeroPais, this.nombrePais);
  }
  guardarTipo(element){
    console.log("Entra guardar1: ", element);
    if(element == 0){
      element = "Fisico";
      console.log("Entra: ", element);
    }
    else if (element == 1){
      element = "Hidrografia";
    }
    else if (element == 2){
      element = "Orografia";
    }
    else if (element == 3){
      element = "Politico";
    }
    else { 
    }
    this.PaisesService.guargarTipo(element);
    this.guardarPais(this.nombrePais);
  }
    
  ngOnInit() {
    this.menuConsultarMapas = RoutesConsultarMapas.filter(menuConsultarMapas => menuConsultarMapas);
    this.menuPoblacion = RoutesPoblacion.filter(menuPoblacion => menuPoblacion);
    this.menuInformacionGeneral = RoutesInformacionGeneral.filter(menuInformacionGeneral => menuInformacionGeneral);
    this.menuDatosCuriosos = RoutesDatosCuriosos.filter(menuDatosCuriosos => menuDatosCuriosos);



    this.menuCuriosear = RoutesCuriosear.filter(menuCuriosear => menuCuriosear);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
