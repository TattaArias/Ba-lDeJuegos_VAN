import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';

import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { MapaFisicoComponent } from 'app/mapa-fisico/mapa-fisico.component';
import { MapaHidrografiaComponent } from 'app/mapa-hidrografia/mapa-hidrografia.component';
import { MapaOrografiaComponent } from 'app/mapa-Orografia/mapa-Orografia.component';
import { MapaPoliticoComponent } from 'app/mapa-Politico/mapa-Politico.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',        component: HomeComponent },
    { path: 'mapaFisico',       component: MapaFisicoComponent },
    { path: 'mapaHidrografia',  component: MapaHidrografiaComponent },
    { path: 'mapapPolitico',    component: TablesComponent },
    { path: 'mapaOrografia',    component: TablesComponent },

    { path: 'typography',       component: TypographyComponent },
    { path: 'icons',            component: IconsComponent },
    { path: 'notifications',    component: NotificationsComponent },
    { path: 'upgrade',          component: UpgradeComponent },
];
