import { Injectable } from '@angular/core';

import { Impressao } from './../models/impressao.models';
import { Formato } from './../models/formato.model';

@Injectable()
export class ConfigCartaoService {

    public formato: Formato[]= [];
    public impressao: Impressao[]= [];

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

    }

    getFormatos() {
        console.log(this.formato);
        return this.formato;
    }

    getImpressao() {
        console.log(this.impressao);
        return this.impressao;
    }

}
