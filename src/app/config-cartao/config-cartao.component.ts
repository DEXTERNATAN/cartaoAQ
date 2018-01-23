import { CartService } from './../shared/services/cart.service';
import { Product } from './../shared/models/product.model';
import { Enobrecimento } from './../shared/models/enobrecimento.model';
import { Cartao } from './../shared/models/cartao.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigCartaoService } from './../shared/services/configCartao.service';
import { Router } from '@angular/router';


export interface Entrega {
    Quantidade: number;
    DiaSemana: Object[];
    Valor: number[];
}

@Component({
    selector: 'app-config-cartao',
    templateUrl: './config-cartao.component.html',
    styleUrls: ['./config-cartao.component.css']
})

export class ConfigCartaoComponent implements OnInit {

    public form: FormGroup;
    public cartao: Cartao;
    public tblEntrega: Entrega[] = [];
    public blEnviar = false;
    public blCriar = false;
    public blContratar = false;
    public entrega  = true;
    public retirada = false;
    public tblFrete = false;
    public formatos: any;
    public impressao: any;
    public papel: any;
    public enobrecimento: any;
    public extras: any;


    constructor(
        private formBuilder: FormBuilder,
        private CartaoService: ConfigCartaoService,
        private cartService:CartService,
        private router: Router
    ) {
        this.form = formBuilder.group({
            Formato: '90 x 50 mm',
            Impressao: 'Frente',
            Cores: '4x4(colorido)',
            Papel: 'Offset 240g',
            Enobrecimento: 'Laminação Fosca',
            Extras: 'Sem Extras',
            Valor:'100',
            Quantidade: '10' 
        });
    }

    ngOnInit() {
        this.formatos = this.CartaoService.getFormatos();
        this.impressao = this.CartaoService.getImpressao();
        this.papel = this.CartaoService.getPapel();
        this.enobrecimento = this.CartaoService.getEnobrecimento();
        this.extras = this.CartaoService.getExtras();

        this.tblEntrega.push(
            {
                'Quantidade': 100,
                'DiaSemana': [{ 'dia': '16', 'Semana': 'segunda-feira', 'Mes': 'Jan' }],
                'Valor': [100, 50, 30, 60]
            },
            {
                'Quantidade': 100,
                'DiaSemana': [{ 'dia': '17', 'Semana': 'terça-feira', 'Mes': 'Jan' }],
                'Valor': [12, 10, 35, 24]
            },
            {
                'Quantidade': 100,
                'DiaSemana': [{ 'dia': '18', 'Semana': 'quarta-feira', 'Mes': 'Jan' }],
                'Valor': [92, 55, 36, 25]
            },
            {
                'Quantidade': 100,
                'DiaSemana': [{ 'dia': '19', 'Semana': 'quinta-feira', 'Mes': 'Jan' }],
                'Valor': [101, 51, 31, 65]
            }
        );

    }

    enviarArte(opcao: boolean) {
        this.blEnviar = true;
        this.blCriar = false;
        this.blContratar = false;
    }

    criarArte(opcao: boolean) {
        this.blEnviar = false;
        this.blCriar = true;
        this.blContratar = false;
    }

    contratarArte(opcao: boolean) {
        this.blEnviar = false;
        this.blCriar = false;
        this.blContratar = true;
    }
    ativarEntrega() {
        this.retirada = false;
        this.entrega = true;
        this.tblFrete = false;
        console.log('Vai entregar');
    }

    ativarRetirada() {
        this.retirada = true;
        this.entrega = false;
        this.tblFrete = false;
        console.log('Vai retirar');
    }

    exibeFrete() {
        this.tblFrete = true;
    }

    save() {
        const cartaoValue = this.form.value;
        let description = 'Cartao de visita';

        for (let key of Object.keys(cartaoValue)) {
            description = description +', ' + cartaoValue[key];
        }
       
        let produto: Product = new Product()
        produto.description = description;
        let date = new Date();
        let id = date.getMilliseconds();
        produto.id = id.toString();
        produto.cep = '72225-273';
        produto.previsaoEntrega = new Date();
        produto.qtdItems = 10;
        produto.images = [
            'assets/images/home/sprite-cart.fw.png',
          ];
        produto.payment = {
            value: 100,
            qtdInstallment: 10,
            valueInstallment: 10
          };
        
        this.cartService.addItem(produto);
        console.log(cartaoValue);
        this.router.navigate(['cart']);
        }

}
