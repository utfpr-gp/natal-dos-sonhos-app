import { Component, Input, OnInit } from '@angular/core';
import { Letter } from 'src/app/types';

@Component({
  selector: 'app-letters-card-list',
  templateUrl: './letters-card-list.component.html',
  styleUrls: ['./letters-card-list.component.css'],
})
export class LettersCardListComponent implements OnInit {
  @Input() letters: Letter[] = [];

  constructor() {}

  ngOnInit(): void {}
}
