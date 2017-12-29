import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-cartao',
  templateUrl: './config-cartao.component.html',
  styleUrls: ['./config-cartao.component.css']
})
export class ConfigCartaoComponent implements OnInit {

  public pnlVisivel = false;

  constructor() { }

  ngOnInit() {
  }

  enviarArte() {
    this.pnlVisivel = true;
  }

}
