import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-christmas-countdown',
  templateUrl: './christmas-countdown.component.html',
  styleUrls: ['./christmas-countdown.component.css'],
})
export class ChristmasCountdownComponent implements OnInit {
  daysToChristmas: number = 0;

  constructor() {}

  ngOnInit(): void {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentYearChristmas = new Date(currentYear, 11, 25);
    const nextChristmasYear =
      currentDate > currentYearChristmas ? currentYear + 1 : currentYear;
    const nextChristmasDate = new Date(nextChristmasYear, 11, 25);

    const diffTime = Math.abs(
      nextChristmasDate.getTime() - currentDate.getTime()
    );
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    this.daysToChristmas = diffDays;
  }

  get todayIsChristmas() {
    return this.daysToChristmas === 0;
  }
}
