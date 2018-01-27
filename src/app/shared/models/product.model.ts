export class Product {
    id: string;
    name: string;
    description: string;
    images: string[];
    qtdItems: number;
    previsaoEntrega: Date;
    cep: string;
    payment: {
        value: number,
        qtdParcelas: number,
        valorParcela: number
    };
}
