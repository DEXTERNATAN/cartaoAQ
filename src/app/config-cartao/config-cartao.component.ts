import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  public retirada  = false;
  public tblFrete  = false;

  constructor(formBuilder: FormBuilder) {
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
    this.cartao = new Cartao();
    this.cartao.Formato = '90 x 50 mm';
    this.cartao.Impressao = 'Frente e Verso';
    // this.cartao.Cores = 'reciclato240g';
    this.cartao.Papel = 'Couché Fosco 300g';
    // this.cartao.acabamento = 'Refile';
    this.cartao.Enobrecimento = 'Laminação Fosca';
    this.cartao.Extras = 'Sem Extras';
    // this.cartao.formaEntrega = 'entrega';
    // this.cartao.cep = '72508502';
    // this.cartao.localRetirada = 'Brasilia';

    console.log('Teste', this.cartao);
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


}