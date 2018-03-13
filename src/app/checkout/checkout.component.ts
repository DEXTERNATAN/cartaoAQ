import { Component, OnInit } from '@angular/core';
import { PagamentoService } from './pagamento.service';
import { Dados } from './dados.class';
import { VariableGlobal } from './variable.global.service';

declare var PagSeguroDirectPayment: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public dados = new Dados();
  // model;

  // constructor() {
  //   this.model = {
  //     sex: "female"
  //   };
  // }

  constructor(public pagamentoService: PagamentoService, private variableGlobal: VariableGlobal) {

    //CARREGA O JAVASCRIPT DO PAGSEGURO 
    this.carregaJavascriptPagseguro();

  }

  ngOnInit() {
  }

  //BUSCA A BANDEIRA DO CARTÃO (EX: VISA, MASTERCARD ETC...) E DEPOIS BUSCA AS PARCELAS;
  //ESTA FUNÇÃO É CHAMADA QUANDO O INPUT QUE RECEBE O NÚMERO DO CARTÃO PERDE O FOCO;
  buscaBandeira() {

    PagSeguroDirectPayment.getBrand({
      cardBin: this.dados.numCard,
      success: response => {

        this.dados.bandCard = response.brand.name;
        this.buscaParcelas();
        console.log('Bandeira do cartão: ' + this.dados.bandCard);

      },
      error: response => { console.log(response); }
    });

  }


  //BUSCA AS PARCELAS NA API DO PAGSEGURO PARA O CLIENTE ESCOLHER
  buscaParcelas() {

    PagSeguroDirectPayment.getInstallments({

      amount: '100',              //valor total da compra (deve ser informado)
      brand: this.dados.bandCard, //bandeira do cartão (capturado na função buscaBandeira)
      maxInstallmentNoInterest: 3,
      success: response => {

        this.dados.parcelas = response.installments[this.dados.bandCard];
        console.log('parcelas: ' + response);

      },
      error: response => { console.log(response) }
    });

  }

  //AO CLICAR NO BOTÃO PAGAR
  onSubmit(f) {

    //BUSCA O HASH DO COMPRADOR JUNTO A API DO PAGSEGURO
    this.dados.hashComprador = PagSeguroDirectPayment.getSenderHash();

    //CRIA O HASK DO CARTÃO DE CRÉDITO JUNTO A API DO PAGSEGURO
    PagSeguroDirectPayment.createCardToken({

      cardNumber: this.dados.numCard,
      cvv: this.dados.codSegCard,
      expirationMonth: this.dados.mesValidadeCard,
      expirationYear: this.dados.anoValidadeCard,
      brand: this.dados.bandCard,
      success: response => {

        this.dados.hashCard = response.card.token;
        console.log(this.dados);

        //NESTE MOMENTO JÁ TEMOS TUDO QUE PRECISAMOS!
        //HORA DE ENVIAR OS DADOS PARA O SERVIDOR PARA CONCRETIZAR O PAGAMENTO
        this.enviaDadosParaServidor();

      },
      error: response => { console.log(response) }

    });

  }

  enviaDadosParaServidor() {

    //COLOQUE AQUI O CÓDIGO PARA ENVIAR OS DADOS PARA O SERVIDOR (PHP, JAVA ETC..) PARA QUE ELE CONSUMA A API DO PAGSEGURO E CONCRETIZE A TRANSAÇÃO
    this.pagamentoService.store(this.dados).subscribe(result => console.log(result));
  }

  //CARREGA O JAVASCRIPT DO PAGSEGURO (A EXPLICAÇÃO ESTA FUNÇÃO ESTÁ LOGO ABAIXO)
  carregaJavascriptPagseguro() {

    if (!this.variableGlobal.getStatusScript()) {
      //SEJA O JAVASCRIPT NO CABEÇÁRIO DA PÁGINA
      new Promise((resolve) => {
        let script: HTMLScriptElement = document.createElement('script');
        script.addEventListener('load', r => resolve());
        script.src = 'https://stc.sandbox.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js';
        document.head.appendChild(script);
      });

      //BUSCA UM ID DE SESSÃO NO SERVIDOR (ESTE ID É GERADO PELA API DO PAGSEGURO QUE VOCÊ DEVE CONSUMIR USANDO SEU SERVIDOR. LER DOCUMENTAÇÃO PARA SABER COMO GERAR)
      this.pagamentoService.startSession().subscribe(result => PagSeguroDirectPayment.setSessionId(result));

      this.variableGlobal.setStatusScript(true);
    }

  }


}


}
