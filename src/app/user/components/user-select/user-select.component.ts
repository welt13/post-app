import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-select',
  templateUrl: './user-select.component.html',
  styles: [
    `
      select {
        width: 275px;
      }
    `
  ]
})
export class UserSelectComponent implements OnInit {
  @Output() onSelect: EventEmitter<number | undefined> = new EventEmitter();

  users: User[] = [];
  userId?: number;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  cleanUser() {
    this.userId = undefined;
    this.onSelect.emit(this.userId);
  }
}
