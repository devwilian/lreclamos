import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './components/form/formulario/formulario.component';

const routes: Routes = [
  {path:'',component:FormularioComponent},
  {path:'',pathMatch:'full',redirectTo:'formulario'},
  {path:'**',pathMatch:'full',redirectTo:'formulario'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
