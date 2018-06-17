import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-economic',
  templateUrl: './group-economic.component.html',
  styleUrls: ['./group-economic.component.scss']
})
export class GroupEconomicComponent implements OnInit {
  public grupo = "Grupo Econômico: ";
  public visao = "Visão Agregada 1";

  constructor() { }

  ngOnInit() {
  }

}
