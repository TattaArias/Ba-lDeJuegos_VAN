import { Routes } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { MapaFisicoComponent } from 'app/mapa-fisico/mapa-fisico.component';
import { MapaHidrografiaComponent } from 'app/mapa-hidrografia/mapa-hidrografia.component';
import { MapaOrografiaComponent } from 'app/mapa-Orografia/mapa-Orografia.component';
import { MapaPoliticoComponent } from 'app/mapa-Politico/mapa-Politico.component';

import { GeneralidadComponent } from 'app/generalidad/generalidad.component';
import { RegionComponent } from 'app/region/region.component';
import { AspectoFisicoComponent } from 'app/aspecto-Fisico/aspecto-Fisico.component';
import { TendenciasComponent } from 'app/tendencias/tendencias.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',        component: HomeComponent },
    { path: 'mapaFisico',       component: MapaFisicoComponent },
    { path: 'mapaHidrografia',  component: MapaHidrografiaComponent },
    { path: 'mapaPolitico',     component: MapaPoliticoComponent },
    { path: 'mapaOrografia',    component: MapaOrografiaComponent },

    { path: 'generalidad',      component: GeneralidadComponent },
    { path: 'region',           component: RegionComponent },
    { path: 'aspectoFisico',    component: AspectoFisicoComponent },
    { path: 'tendencias',       component: TendenciasComponent },


];
