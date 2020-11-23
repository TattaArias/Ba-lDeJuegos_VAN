import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { MapaFisicoComponent } from './mapa-fisico/mapa-fisico.component';
import { MapaHidrografiaComponent } from './mapa-hidrografia/mapa-hidrografia.component';
import { MapaPoliticoComponent } from './mapa-politico/mapa-politico.component';
import { MapaOrografiaComponent } from './mapa-orografia/mapa-orografia.component';
<<<<<<< HEAD
import { RegionesComponent } from './regiones/regiones.component';
import { GlosarioComponent } from './glosario/glosario.component';
import { CoordenadasGeograficasComponent } from './coordenadas-geograficas/coordenadas-geograficas.component';
import { GeneralidadComponent } from './generalidad/generalidad.component';
import { RegionComponent } from './region/region.component';
import { AspectoFisicoComponent } from './aspecto-fisico/aspecto-fisico.component';
import { TendenciasComponent } from './tendencias/tendencias.component';
=======
>>>>>>> 980219d6ca4cd4b278fa33fbc84b54906192b99f



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    MapaFisicoComponent,
    MapaHidrografiaComponent,
    MapaPoliticoComponent,
    MapaOrografiaComponent,
<<<<<<< HEAD
    RegionesComponent,
    GlosarioComponent,
    CoordenadasGeograficasComponent,
    GeneralidadComponent,
    RegionComponent,
    AspectoFisicoComponent,
    TendenciasComponent,
=======
>>>>>>> 980219d6ca4cd4b278fa33fbc84b54906192b99f
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
