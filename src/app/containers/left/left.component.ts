import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {
  public menu = [
    {icon: "language", text: "Painel de Gestão"},
    {icon: "fingerprint", text: "Conta Digital"},
    {icon: "sync", text: "Ant. de Recebíveis"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
