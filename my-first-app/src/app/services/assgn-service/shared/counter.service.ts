import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  constructor() {}

  inactiveToActiveCount: number = 0;
  activeToInactiveCount: number = 0;

  inactiveToActiveInc() {
    this.inactiveToActiveCount++;
    console.log(
      'Switched from Inactive to active ' +
        this.inactiveToActiveCount +
        ' times'
    );
  }

  activeToInactiveInc() {
    this.activeToInactiveCount++;
    console.log(
      'Switched from active to inactive ' +
        this.activeToInactiveCount +
        ' times'
    );
  }
}
