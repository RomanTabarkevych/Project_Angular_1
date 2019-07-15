import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-users-list',
  template: `
  <div class="someContainer">  
      <h2 class="someText">Technologies:</h2> 
      <p>HTML</p>
      <p>CSS</p>
      <p>JavaScript</p>
      <p>Angular</p>
  </div>    
  `,
  styles: [`.someContainer {margin: 20px}
  .someText {font-size:1.2rem;}`]
})
export class UsersListComponent implements OnInit {
  users;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}
