import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './layout/clientes/clientes.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FormularioComponent } from './layout/formulario/formulario.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SliderComponent } from './layout/slider/slider.component';
import { AcercaComponent } from './paginas/acerca/acerca.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { PortfolioComponent } from './paginas/portfolio/portfolio.component';
import { ServicosComponent } from './paginas/servicos/servicos.component';
import { WhatsappComponent } from './layout/whatsapp/whatsapp.component';

const routes: Routes = [

  //raiz
  { path: '', component: InicioComponent },
  //layout
  { path: 'clientes', component: ClientesComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'whatsapp', component: WhatsappComponent },
  //páginas
  { path: 'acerca', component: AcercaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'servicos', component: ServicosComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
