import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  @Output() public generation = new EventEmitter<{ value: number }>();
  generatedValue: number;

  interval;
  isStopped: boolean = true;

  onStop(): void {
    this.isStopped = !this.isStopped;
    clearInterval(this.interval);
  }

  onStart(): void {
    this.isStopped = !this.isStopped;
    this.interval = setInterval(() => {
      this.generation.emit({ value: Math.round(Math.random() * 35262176) });
    }, 1000);
  }
}
