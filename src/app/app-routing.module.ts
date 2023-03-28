import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ErrorComponent } from './error/error.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { IdiomasComponent } from './idiomas/idiomas.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
{path: "inicio" , component:InicioComponent},
{path: "dashboard" , component:DashboardComponent},
{path: "", redirectTo: "inicio", pathMatch: "full"},
{path: "educacion", component: EducacionComponent},
{path: "experiencia", component: ExperienciaComponent},
{path: "habilidades", component: HabilidadesComponent},
{path: "idiomas", component: IdiomasComponent},
{path: "**", component: ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
