import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  public label = "Alertas";
  public time = "Últimos 5 dias";
  public item7 = "7 Assinaturas Digitais";
  public item13 = "13 Notas Canceladas";
  public item23 = "23 Notas Canceladas";
  public action = "Ações";

  public actions = [
    {text: "Todas"},
    {text: "Canceladas"},
    {text: "Ativas"},
    {text: "Bloqueadas"},
    {text: "Pendentes"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
