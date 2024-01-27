import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  constructor(private _userService: UserService) {}

  @Input() users: string[];

  onSetToActive(id: number) {
    this._userService.onSetToActive(id);
  }

  ngOnInit(): void {
    this.users = this._userService.inactiveUsers;
  }
}
