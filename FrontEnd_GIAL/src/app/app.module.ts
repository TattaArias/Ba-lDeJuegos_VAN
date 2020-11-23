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
import { CoordenadasGeograficasComponent } from './coordenadas-geograficas/coordenadas-geograficas.component';
import { GeneralidadComponent } from './generalidad/generalidad.component';
import { RegionComponent } from './region/region.component';
import { AspectoFisicoComponent } from './aspecto-fisico/aspecto-fisico.component';
import { TendenciasComponent } from './tendencias/tendencias.component';
import { EscudoComponent } from './escudo/escudo.component';
import { BanderaComponent } from './bandera/bandera.component';
import { HimnoComponent } from './himno/himno.component';
import { VideoComponent } from './video/video.component';
import { MeridianosParalelosComponent } from './meridianos-paralelos/meridianos-paralelos.component';
import { CorrientesMaritimasComponent } from './corrientes-maritimas/corrientes-maritimas.component';
import { DesiertosComponent } from './desiertos/desiertos.component';
import { VulcanismoComponent } from './vulcanismo/vulcanismo.component';
import { IslasComponent } from './islas/islas.component';
import { PlacasTectonicasComponent } from './placas-tectonicas/placas-tectonicas.component';
import { BreveHistoriaComponent } from './breve-historia/breve-historia.component';
import { DemografiaComponent } from './demografia/demografia.component';
import { GobiernoComponent } from './gobierno/gobierno.component';
import { EconomiaComponent } from './economia/economia.component';
import { CulturaComponent } from './cultura/cultura.component';
import { GeneralidadPoblacionComponent } from './generalidad-poblacion/generalidad-poblacion.component';
import { PangeaComponent } from './pangea/pangea.component';
import { SismoComponent } from './sismo/sismo.component';
import { EfectoInvernaderoComponent } from './efecto-invernadero/efecto-invernadero.component';
import { DestruccionCapaDeOzonoComponent } from './destruccion-capa-de-ozono/destruccion-capa-de-ozono.component';
import { FenomenoNinoComponent } from './fenomeno-nino/fenomeno-nino.component';
import { CiclonesTropicalesComponent } from './ciclones-tropicales/ciclones-tropicales.component';
import { SaltoDelAngelComponent } from './salto-del-angel/salto-del-angel.component';
import { CanalPanamaComponent } from './canal-panama/canal-panama.component';



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
    CoordenadasGeograficasComponent,
    GeneralidadComponent,
    RegionComponent,
    AspectoFisicoComponent,
    TendenciasComponent,
    EscudoComponent,
    BanderaComponent,
    HimnoComponent,
    VideoComponent,
    MeridianosParalelosComponent,
    CorrientesMaritimasComponent,
    DesiertosComponent,
    VulcanismoComponent,
    IslasComponent,
    PlacasTectonicasComponent,
    BreveHistoriaComponent,
    DemografiaComponent,
    GobiernoComponent,
    EconomiaComponent,
    CulturaComponent,
    GeneralidadPoblacionComponent,
    PangeaComponent,
    SismoComponent,
    EfectoInvernaderoComponent,
    DestruccionCapaDeOzonoComponent,
    FenomenoNinoComponent,
    CiclonesTropicalesComponent,
    SaltoDelAngelComponent,
    CanalPanamaComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
