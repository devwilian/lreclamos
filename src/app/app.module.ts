import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { FormsModule} from '@angular/forms';
import { FooterComponent } from './components/common/footer/footer.component';
import { FormularioComponent } from './components/form/formulario/formulario.component';
import { BienvenidoComponent } from './components/form/bienvenido/bienvenido.component';
import { AspectosgeneralesComponent } from './components/form/aspectosgenerales/aspectosgenerales.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormularioComponent,
    DashboardComponent,
    FooterComponent,
    BienvenidoComponent,
    AspectosgeneralesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
