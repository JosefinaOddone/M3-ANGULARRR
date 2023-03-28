import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { InicioComponent } from './inicio/inicio.component';
import { DatosComponent } from './datos/datos.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { MenunavComponent } from './menunav/menunav.component';
import { NombreyfotoComponent } from './nombreyfoto/nombreyfoto.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { IdiomasComponent } from './idiomas/idiomas.component';
import { EditoreduComponent } from './dashboard/editoredu/editoredu.component';
import { ModalComponent } from './dashboard/modal/modal.component';
import { DasheduComponent } from './dashboard/dashedu/dashedu.component';
import { DashexpeComponent } from './dashboard/dashexpe/dashexpe.component';
import { DashhabComponent } from './dashboard/dashhab/dashhab.component';
import { DashidiComponent } from './dashboard/dashidi/dashidi.component';
import { DasfotoynomComponent } from './dashboard/dasfotoynom/dasfotoynom.component';
import { DashdatosComponent } from './dashboard/dashdatos/dashdatos.component';
import { EditorperfComponent } from './dashboard/editorperf/editorperf.component';
import { EditornomydatosComponent } from './dashboard/editornomydatos/editornomydatos.component';
import { Portfoliom3Service } from './servicios/portfoliom3.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    DashboardComponent,
    ErrorComponent,
    InicioComponent,
    DatosComponent,
    EducacionComponent,
    ExperienciaComponent,
    MenunavComponent,
    NombreyfotoComponent,
    HabilidadesComponent,
    IdiomasComponent,
    EditoreduComponent,
    ModalComponent,
    DasheduComponent,
    DashexpeComponent,
    DashhabComponent,
    DashidiComponent,
    DasfotoynomComponent,
    DashdatosComponent,
    EditorperfComponent,
    EditornomydatosComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
