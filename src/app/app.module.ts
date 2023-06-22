import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SliderComponent } from './layout/slider/slider.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ServicosComponent } from './paginas/servicos/servicos.component';
import { AcercaComponent } from './paginas/acerca/acerca.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FormularioComponent } from './layout/formulario/formulario.component';
import { ClientesComponent } from './layout/clientes/clientes.component';
import { PortfolioComponent } from './paginas/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    InicioComponent,
    ServicosComponent,
    AcercaComponent,
    ContactoComponent,
    FooterComponent,
    FormularioComponent,
    ClientesComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
