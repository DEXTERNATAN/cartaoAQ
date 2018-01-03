import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { ItemsService } from '../shared/services/item.service';
import { CartService } from '../shared/services/cart.service';
import { SendMailService } from './services/send-mail.service';
import { ConfigCartaoService } from './services/configCartao.service';

@NgModule({

  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule ]
})

export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ItemsService, CartService, SendMailService, ConfigCartaoService]
    };
  }
}
