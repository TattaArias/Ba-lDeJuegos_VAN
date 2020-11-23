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
import { PoblacionComponent } from './poblacion/poblacion.component';
import { LoginComponent } from './login/login.component';
import { MapaFisicoComponent } from './mapa-fisico/mapa-fisico.component';
import { MapaHidrografiaComponent } from './mapa-hidrografia/mapa-hidrografia.component';
import { MapaPoliticoComponent } from './mapa-politico/mapa-politico.component';
import { MapaOrografiaComponent } from './mapa-orografia/mapa-orografia.component';
import { RegionesComponent } from './regiones/regiones.component';
import { GlosarioComponent } from './glosario/glosario.component';



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
    PoblacionComponent,
    LoginComponent,
    MapaFisicoComponent,
    MapaHidrografiaComponent,
    MapaPoliticoComponent,
    MapaOrografiaComponent,
    RegionesComponent,
    GlosarioComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
