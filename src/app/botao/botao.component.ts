import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss'],
})
export class BotaoComponent implements OnInit {

  @Input() nome: string;

  constructor() { }

  ngOnInit() {}

  botao() {
    alert(this.nome);
  }

}
