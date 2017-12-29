import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CorporativoComponent } from './corporativo/corporativo.component';
import { ContactformComponent } from './contactform/contactform.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { CartoesComponent } from './cartoes/cartoes.component';
import { ContratoComponent } from './contrato/contrato.component';
import { SobreComponent } from './sobre/sobre.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, data: { breadcrumbs: 'home'}},
  { path: 'corporativo', component: CorporativoComponent, data: { breadcrumbs: 'corporativo'} },
  { path: 'contato', component: ContactformComponent, data: { breadcrumbs: 'contato'}},
  { path: 'lancamentos', component: LancamentosComponent, data: { breadcrumbs: 'lancamentos'} },
  { path: 'cartoes', component: CartoesComponent, data: { breadcrumbs: 'cartoes'}  },
  { path: 'contrato', component: ContratoComponent, data: { breadcrumbs: 'contrato'} },
  { path: 'sobre', component: SobreComponent, data: { breadcrumbs: 'sobre'} },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    McBreadcrumbsModule.forRoot()
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
