import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserService, AuthenticationService, AlertService } from '../_services';


@Component({
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPassword: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
  ) {

    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
  }
}


  ngOnInit() {
    this.forgotPassword = this.formBuilder.group({
      email: ['', Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+\.[a-z]{2,3}$')]
    });
  }

  get f() { return this.forgotPassword.controls; }

  onSubmit() {
    this.submitted = true;
    this.alertService.clear();
    if (this.forgotPassword.invalid) {
      return;
    }

    this.loading = true;
    this.userService.password(this.forgotPassword.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Email is send succesful to your email', true);
          this.router.navigate(['/login'], { queryParams: { registered: true}});
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }
}
