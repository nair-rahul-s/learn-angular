import { Injectable, Output, EventEmitter } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _counterService: CounterService) {}

  activeUsers: string[] = ['Max', 'Anna'];
  inactiveUsers: string[] = ['Chris', 'Manu'];
  userSetToInactive = new EventEmitter<number>();
  userSetToActive = new EventEmitter<number>();

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.userSetToInactive.emit(id);
    this._counterService.activeToInactiveInc();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.userSetToActive.emit(id);
    this._counterService.inactiveToActiveInc();
  }
}
