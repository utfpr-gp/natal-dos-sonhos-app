import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminHomeComponent implements OnInit {

  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['id', 'classe', 'responsável', 'escola'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Classes | null;

  constructor() { }

  ngOnInit(): void {
  }


  
}

export interface Classes {
  responsável: string;
  id: number;
  classe: string;
  escola: string;
  quantidade: string;
  endereco: string;
}

const ELEMENT_DATA: Classes[] = [
  {
    id: 1,
    responsável: 'teste',
    classe: '2A',
    escola: 'Escola Teste',
    quantidade: '03',
    endereco: `Endereço: Av Teste, 111, bairro, CEP:99999-000`,
  },
  {
    id: 2,
    responsável: 'teste2',
    classe: '3B',
    escola: 'Escola Teste',
    quantidade: '04',
    endereco: `Endereço: Av Teste, 111, bairro, CEP:99999-000`,

  },
  {
    id: 3,
    responsável: 'teste3',
    classe: '4A',
    escola: 'Escola Teste',
    quantidade: '10',
    endereco: `Endereço: Av Teste, 111, bairro, CEP:99999-000`,
  },
];
