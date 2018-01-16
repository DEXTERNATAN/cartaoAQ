export class Cartao {
    Formato: string;
    Impressao: string;
    Cores: string;
    Papel: string;
    Acabamento: string;
    Enobrecimento: string;
    Extras: string;
    ConfigAdicionais: string;
    qtdItems: number;
    previsaoEntrega: Date;
    cep: string;
    payment: {
        value: number,
        qtdInstallment: number,
        valueInstallment: number
    };
}