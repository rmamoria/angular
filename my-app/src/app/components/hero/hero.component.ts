import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  currentTime: Date = new Date();

  private timer: any; // Variable to hold the interval timer

  constructor() { }

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.updateDateTime();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer); // Clear the interval timer when component is destroyed
  }

  updateDateTime(): void {
    this.currentTime = new Date();
  }
}
