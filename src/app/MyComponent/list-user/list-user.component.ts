import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import { User } from 'src/app/Model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: User[] = [];
  

  constructor(private userService: UserService ,private router: Router) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(users => {
      console.log(users); 
      this.users = users;
    });
  }
  getUserAdminStatus(user: User): boolean {
    return user.isAdmin;
  }
  navigateToUpdatePage(userId: number) {
    // Navigate to the update user page with the user's ID
    this.router.navigate(['/update-user', userId]);
  }

  confirmDelete(userId: number): void {
    this.router.navigate(['/delete-user', userId]);
  }
}
