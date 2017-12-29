import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ScrollToModule } from 'ng2-scroll-to';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routes';
import { CorporativoComponent } from './corporativo/corporativo.component';
import { ContactformComponent } from './contactform/contactform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SendMailService } from './send-mail.service';
import { SobreComponent } from './sobre/sobre.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { CartoesComponent } from './cartoes/cartoes.component';

import { ContratoComponent } from './contrato/contrato.component';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';


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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
