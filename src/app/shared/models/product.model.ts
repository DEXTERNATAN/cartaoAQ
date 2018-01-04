export class Product {
    id: string;
    name: string;
    images: string[];
    payment: {
        value: number,
        qtdstallment: number,
        valueStallment: number
    };
}
