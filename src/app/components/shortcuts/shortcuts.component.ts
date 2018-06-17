import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shortcuts',
  templateUrl: './shortcuts.component.html',
  styleUrls: ['./shortcuts.component.scss']
})
export class ShortcutsComponent implements OnInit {
  public label = "Atalhos" 	
  public operacional = "Operacional";
  public geral = "Geral";

  public atalhos = [
    {text: "Envio"},
    {text: "Assinatura"},
    {text: "Envio de Duplicadas"},
    {text: "Assinatura Digital"},
    {text: "Nova Digital"}
  ];

  public gerais = [
    {text: "Carteira"},
    {text: "Instruções"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
