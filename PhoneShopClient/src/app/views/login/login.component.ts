import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {Login} from "../../entities/Login";
import {LoginService} from "../../service/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup(
    {
      username: new FormControl("", [
        Validators.required]),

      password: new FormControl("", [
        Validators.required])
    }
  )
  changeType: boolean = true;
  visible: boolean = true;
  error: String = '';
  // loginfun: boolean =false;

  viewPass() {
    this.changeType = !this.changeType;
    this.visible = !this.visible;
  }

  get usernameField(): FormControl {
    return this.loginForm.controls.username as FormControl;
  }

  get passwordField(): FormControl {
    return this.loginForm.controls.password as FormControl;
  }

  constructor(private loginService: LoginService, private snackBar: MatSnackBar, private router:Router) {
  }

  ngOnInit(): void {
  }
  async submit(): Promise<void> {
    let massage;
    if (!this.loginForm.invalid) {
      try {
        let login = new Login();
        login.username = this.usernameField.value;
        login.password = this.passwordField.value;
        login = await this.loginService.signIn(login);

        if (login !== null) {
          await this.router.navigate(['home'])
        } else {
          massage = "log in failed";
          this.error = massage;
          this.snackBar.open(massage, '', {
            duration: 3000,
            horizontalPosition: "center",
            verticalPosition: "top"
          });
        }

      } catch {

        //    this.snackBar.open(e.error.text, '', {duration: 2000, horizontalPosition: "center", verticalPosition: "top"});

      }
    }}}
