import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-assgn-service',
  templateUrl: './assgn-service.component.html',
  styleUrl: './assgn-service.component.css',
  providers: [UserService],
})
export class AssgnServiceComponent implements OnInit {
  constructor(private _userService: UserService) {}

  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];

  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }

  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }

  activeUsers: string[];
  inactiveUsers: string[];

  ngOnInit(): void {
    this.activeUsers = this._userService.activeUsers;
    this.inactiveUsers = this._userService.inactiveUsers;
  }
  
}
