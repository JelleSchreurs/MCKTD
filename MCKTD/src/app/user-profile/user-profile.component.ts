import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService, AuthenticationService } from '../_services';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {
    // currentUser: any;
    users = [];

    public currentUser;
    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        this.currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : '';
    }

    ngOnInit() {
        console.log(this.currentUser);
      //  this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.loadAllUsers());
    }

    private loadAllUsers() {
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }

}
