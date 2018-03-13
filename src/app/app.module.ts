import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
// registerLocaleData
// import localePt from '@angular/common/locales/pt';


/* Modulo externos */
import { AlertModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ScrollToModule } from 'ng2-scroll-to';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';

/* Componentes do projeto */
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
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
import { CartitemComponent } from './cartitem/cartitem.component';

/* Services do projeto */
import { ConfigCartaoService } from './shared/services/configCartao.service';
import { SendMailService } from './shared/services/sendmail.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormWizardModule } from 'angular2-wizard';
import { WizardCartaoaqComponent } from './wizard-cartaoaq/wizard-cartaoaq.component';
import { WizardCartaoAQStepComponent } from './wizard-cartaoaq/wizard-cartaoaqstep.component';

export * from './wizard-cartaoaq/wizard-cartaoaq.component';
export * from './wizard-cartaoaq/wizard-cartaoaqstep.component';


// registerLocaleData(localePt);


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
    ConfigCartaoComponent,
    CartComponent,
    CartitemComponent,
    CheckoutComponent,
    WizardCartaoaqComponent,
    WizardCartaoAQStepComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
    ScrollToModule.forRoot(),
    SharedModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    McBreadcrumbsModule,
    FormWizardModule
  ],
  exports: [
    WizardCartaoaqComponent,
    WizardCartaoAQStepComponent
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
