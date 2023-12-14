import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})

export class CreateUserComponent {
  user: User = new User(0, '', '', '', '', '', '', false);

  constructor(private router: Router, private userService: UserService) {}

  createUser(): void {
    this.userService.createUser(this.user).subscribe(
      (createdUser: any) => {
        console.log('User created successfully:', createdUser);
        this.router.navigate(['/list-user']);
      },
      (error: any) => {
        console.error('Error creating user:', error);
      }
    );
  }
}
