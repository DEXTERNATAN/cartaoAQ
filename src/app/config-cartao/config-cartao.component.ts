import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigCartaoService } from './../shared/services/configCartao.service';

export class Cartao {
    Formato: string;
    Impressao: string;
    Cores: string;
    Papel: string;
    Acabamento: string;
    Enobrecimento: string;
    Extras: string;
    ConfigAdicionais: string;
}

export interface Entrega {
    Quantidade: number;
    DiaSemana: Object[];
    Mes: string[];
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
        private CartaoService: ConfigCartaoService
    ) {
        this.form = formBuilder.group({
            Formato: '90 x 50 mm',
            Impressao: 'Frente',
            Cores: '4x4(colorido)',
            Papel: 'Offset 240g',
            Enobrecimento: 'Laminação Fosca',
            Extras: 'Sem Extras'
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
                'DiaSemana': [{ 'dia': '16', 'Semana': 'Segunda'}],
                'Mes': ['jan', 'jan', 'jan', 'jan'],
                'Valor': [100, 50, 30, 60]
            },
            {
                'Quantidade': 200,
                'DiaSemana': [{ 'dia': '16', 'Semana': 'Segunda'}],
                'Mes': ['jan', 'jan', 'jan', 'jan'],
                'Valor': [100, 50, 30, 60]
            },
            {
                'Quantidade': 300,
                'DiaSemana': [{ 'dia': '16', 'Semana': 'Segunda'}],
                'Mes': ['jan', 'jan', 'jan', 'jan'],
                'Valor': [100, 50, 30, 60]
            },
            {
                'Quantidade': 400,
                'DiaSemana': [{ 'dia': '16', 'Semana': 'Segunda'}],
                'Mes': ['jan', 'jan', 'jan', 'jan'],
                'Valor': [100, 50, 30, 60]
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
        console.log(cartaoValue);
    }

}
