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
import { ConfigCartaoComponent } from './config-cartao/config-cartao.component';

const routes: Routes = [
  { path: '', component: HomeComponent , data: { breadcrumbs: true, text: ''}},
  { path: 'home', component: HomeComponent, data: { breadcrumbs: 'home'}},
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'corporativo', component: CorporativoComponent },
  { path: 'contato', component: ContactformComponent},
  { path: 'lancamentos', component: LancamentosComponent },
  { path: 'cartoes', component: CartoesComponent },
  { path: 'contrato', component: ContratoComponent },
  { path: 'configCartao', component: ConfigCartaoComponent },
  { path: 'sobre', component: SobreComponent },

];
const routesChild: Routes = [
  { path: '', data: { breadcrumbs: 'Pagina Inicial'}, children: [
  { path: 'corporativo', component: CorporativoComponent, data: { breadcrumbs: 'corporativo'} },
  { path: 'contato', component: ContactformComponent, data: { breadcrumbs: 'contato'}},
  { path: 'lancamentos', component: LancamentosComponent, data: { breadcrumbs: 'lancamentos'} },
  { path: 'cartoes', component: CartoesComponent, data: { breadcrumbs: 'cartoes'}  },
  { path: 'contrato', component: ContratoComponent, data: { breadcrumbs: 'contrato'} },
  { path: 'sobre', component: SobreComponent, data: { breadcrumbs: 'sobre'} },
 ]}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    McBreadcrumbsModule.forRoot(),
    RouterModule.forChild(routesChild)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
