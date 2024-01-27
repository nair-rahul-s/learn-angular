import {
  Component,
  OnInit
} from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  constructor(private _userService: UserService) {}

  users: string[];

  ngOnInit(): void {
    this.users = this._userService.activeUsers;
  }

  onSetToInactive(id: number) {
    this._userService.onSetToInactive(id);
  }
}
