import { Component } from '@angular/core';

@Component({
  selector: 'app-learn-directives',
  templateUrl: './learn-directives.component.html',
  styleUrl: './learn-directives.component.css',
})
export class LearnDirectivesComponent {
  values: number[] = [];
  generatedValue: number;
  oddOrEven: string = '';

  interval;
  isStopped: boolean = true;

  onStop(): void {
    this.isStopped = !this.isStopped;
    clearInterval(this.interval);
    this.values = [];
    this.oddOrEven = '';
  }

  onStart(): void {
    this.isStopped = !this.isStopped;
    this.interval = setInterval(() => {
      const val = Math.round(Math.random() * 1.5);
      if (this.isEven(val)) {
        this.oddOrEven = 'even';
      } else {
        this.oddOrEven = 'odd';
      }
      this.values.push(val);
    }, 1000);
  }

  isEven(value: number): boolean {
    return value % 2 == 0;
  }
}
