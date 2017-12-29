import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
