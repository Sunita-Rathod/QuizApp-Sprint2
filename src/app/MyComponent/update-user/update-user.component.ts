import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userId!: number;
  user: User = new User(0, '', '', '', '', '', '', false);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const userIdParam = this.route.snapshot.paramMap.get('id');

    if (userIdParam !== null) {
      this.userId = +userIdParam;

      this.userService.getUserById(this.userId).subscribe(
        (user) => {
          this.user = user;
        },
        (error) => {
          console.error('Error fetching user data:', error);
        }
      );
    } else {
      console.error('User ID parameter is null.');
    }
  }

  updateUser(): void {
    this.userService.updateUser(this.userId, this.user).subscribe(
      (updatedUser) => {
        console.log('User updated successfully:', updatedUser);
        this.router.navigate(['/list-user']);
      },
      (error) => {
        console.error('Error updating user:', error);
        this.router.navigate(['/list-user']);
      }
    );
  }
}

