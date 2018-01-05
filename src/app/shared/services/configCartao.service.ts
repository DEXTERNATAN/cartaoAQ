import { Injectable } from '@angular/core';

import { Impressao } from './../models/impressao.models';
import { Formato } from './../models/formato.model';
import { Papel } from '../models/papel.model';
import { Enobrecimento } from './../models/enobrecimento.model';
import { Extras } from '../models/extras.models';


@Injectable()
export class ConfigCartaoService {

    public formato: Formato[]= [];
    public impressao: Impressao[]= [];
    public papel: Papel[] = [];
    public enobrecimento: Enobrecimento[] = [];
    public extras: Extras[] = [];

    constructor() {

        // Formato
        this.formato.push(
            {
                descricao: '90 x 50 mm',
                pathImagem: '/assets/images/home/9050.jpg',
                altImage: '90 x 50 mm'
            },
            {
                descricao: '50 x 50 mm',
                pathImagem: '/assets/images/home/5050.jpg',
                altImage: '50 x 50 mm'
            },
            {
                descricao: '85 x 55 mm',
                pathImagem: '/assets/images/home/8555.jpg',
                altImage: '85 x 55 mm'
            },
            {
                descricao: '80 x 50 mm',
                pathImagem: '/assets/images/home/8050.jpg',
                altImage: '80 x 50 mm'
            },
            {
                descricao: 'Personalizar',
                pathImagem: '/assets/images/home/8555.jpg',
                altImage: 'Personalizar'
            }
        );

        // Impressao
        this.impressao.push(
            {
                descricao: 'Frente',
                pathImagem: '/assets/images/home/fbcard-frente.jpg',
                altImage: 'Frente'
            },
            {
                descricao: 'Frente e Verso',
                pathImagem: '/assets/images/home/fbcard-frenteverso.jpg',
                altImage: 'Frente e Verso'
            }
        );

        // Papel
        this.papel.push(
            {
                descricao: 'Offset 240g',
                pathImagem: '/assets/images/home/240g.jpg',
                altImage: 'Offset 240g'
            },
            {
                descricao: 'Reciclato 240g',
                pathImagem: '/assets/images/home/240gg.jpg',
                altImage: 'Reciclato 240g'
            },
            {
                descricao: 'Couché Brilho 250g',
                pathImagem: '/assets/images/home/250.jpg',
                altImage: 'Couché Brilho 250g'
            },
            {
                descricao: 'Couché Fosco 250g',
                pathImagem: '/assets/images/home/250fg.jpg',
                altImage: 'Couché Fosco 250g'
            },
            {
                descricao: 'Couché Brilho 300g',
                pathImagem: '/assets/images/home/250fg.jpg',
                altImage: 'Couché Brilho 300g'
            },
            {
                descricao: 'Couché Fosco 300g',
                pathImagem: '/assets/images/home/250fg.jpg',
                altImage: 'Couché Fosco 300g'
            },
            {
                descricao: 'Couché Brilho 350g',
                pathImagem: '/assets/images/home/250fg.jpg',
                altImage: 'Couché Brilho 350g'
            },
            {
                descricao: 'Couché Fosco 350g',
                pathImagem: '/assets/images/home/250fg.jpg',
                altImage: 'Couché Fosco 350g'
            },
            {
                descricao: 'Silverprint 330g',
                pathImagem: '/assets/images/home/250fg.jpg',
                altImage: 'Silverprint 330g'
            }
        );

        // Enobrecimento
        this.enobrecimento.push(
            {
                descricao: 'Laminação Fosca',
                pathImagem: '/assets/images/home/laminacaofosca.jpg',
                altImage: 'Laminação Fosca'
            },
            {
                descricao: 'Laminação Brilho',
                pathImagem: '/assets/images/home/laminacaobrilho.jpg',
                altImage: 'Laminação Brilho'
            },
            {
                descricao: 'Verniz UV Total',
                pathImagem: '/assets/images/home/verniztotal.jpg',
                altImage: 'Verniz UV Total'
            },
            {
                descricao: 'Laminação Soft Touch',
                pathImagem: '/assets/images/home/soft-touch.jpg',
                altImage: 'Laminação Soft Touch'
            }
        );

        // Extras
        this.extras.push(
            {
                descricao: 'Sem Extras',
                pathImagem: '/assets/images/home/laminacaofosca.jpg',
                altImage: 'Sem Extras'
            },
            {
                descricao: 'Laminação Brilho',
                pathImagem: '/assets/images/home/verniztotal.jpg',
                altImage: 'Laminação Brilho'
            }
        );


    }

    getFormatos() {
        console.log(this.formato);
        return this.formato;
    }

    getImpressao() {
        console.log(this.impressao);
        return this.impressao;
    }

    getPapel() {
        console.log(this.papel);
        return this.papel;
    }

    getEnobrecimento() {
        console.log(this.enobrecimento);
        return this.enobrecimento;
    }

    getExtras() {
        console.log(this.extras);
        return this.extras;
    }

}
