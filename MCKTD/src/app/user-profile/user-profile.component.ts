import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService, AuthenticationService } from '../_services';


@Component({
<<<<<<< HEAD
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
=======
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
>>>>>>> master
})

export class UserProfileComponent implements OnInit {
    // currentUser: any;
    users = [];
<<<<<<< HEAD
    imageUrl: string = "../assets/Images/UserImage.png";
=======
    imageUrl = '../assets/Images/UserImage.png';
>>>>>>> master
    public currentUser;
    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        this.currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : '';
    }

    ngOnInit() {
<<<<<<< HEAD
        var reader = new FileReader();
=======
        console.log(this.currentUser);
      //  this.loadAllUsers();
        let reader = new FileReader();
>>>>>>> master
        reader.onload = (filedata) => {
        };

<<<<<<< HEAD
        //reader.readAsDataURL()
=======
        // reader.readAsDataURL()
>>>>>>> master
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
