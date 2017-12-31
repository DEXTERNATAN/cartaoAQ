import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Modulo externos */
import { AlertModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ScrollToModule } from 'ng2-scroll-to';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';

/* Componentes do projeto */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routes';
import { CorporativoComponent } from './corporativo/corporativo.component';
import { ContactformComponent } from './contactform/contactform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SobreComponent } from './sobre/sobre.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { CartoesComponent } from './cartoes/cartoes.component';
import { ContratoComponent } from './contrato/contrato.component';
import { ConfigCartaoComponent } from './config-cartao/config-cartao.component';
import { CartComponent } from './cart/cart.component';

/* Services do projeto */
import { ConfigCartaoService } from './shared/services/configCartao.service';
import { SendMailService } from './send-mail.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CorporativoComponent,
    ContactformComponent,
    SobreComponent,
    LancamentosComponent,
    CartoesComponent,
    ContratoComponent,
    ContactformComponent,
    CartoesComponent,
    ContratoComponent,
    ConfigCartaoComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
    ScrollToModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    McBreadcrumbsModule
  ],
  providers: [ ConfigCartaoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
