import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrump',
  templateUrl: './breadcrump.component.html',
  styleUrls: ['./breadcrump.component.scss']
})
export class BreadcrumpComponent implements OnInit {
  public breadcrumb = {parents: "Página Inicial", child: "Painel de Gestão"}

  constructor() { }

  ngOnInit() {
  }

}
