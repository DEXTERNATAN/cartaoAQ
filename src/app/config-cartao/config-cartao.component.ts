
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

@Component({
    selector: 'app-config-cartao',
    templateUrl: './config-cartao.component.html',
    styleUrls: ['./config-cartao.component.css']
})

export class ConfigCartaoComponent implements OnInit {

    public form: FormGroup;
    public cartao: Cartao;
    public blEnviar = false;
    public entrega = true;
    public retirada = false;
    public tblFrete = false;
    public formatos: any;
    public impressao: any;

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
    }

    enviarArte(opcao: boolean) {
        this.blEnviar = !this.blEnviar;
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