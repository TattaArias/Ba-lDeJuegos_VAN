import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Consultar Mapas',  icon: 'pe-7s-map', class: '' },
    { path: '/dashboard', title: 'Consultar Textos',  icon: 'pe-7s-notebook', class: '' },
    { path: '/user', title: 'Temas Interesantes',  icon:'pe-7s-magic-wand', class: '' },
    { path: '/table', title: 'Curosear',  icon:'pe-7s-glasses', class: '' },
];

export const RoutesConsultarMapas: RouteInfo[] = [
  { path: '/dashboard', title: 'Hidrografía',  icon: 'pe-7s-map', class: '' },
  { path: '/dashboard', title: 'Oroggrafía',  icon: 'pe-7s-map', class: '' },
  { path: '/dashboard', title: 'Mapa Político',  icon: 'pe-7s-map', class: '' },
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
  menuItems: any[];
  menuConsultarMapas: any[];
  menuConsultarTextos: any[];
  menuTemasInteresantes: any[];
  menuCuriosear: any[];
  
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
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
