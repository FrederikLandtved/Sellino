import { Component, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  emailForm: string = '';
  passwordForm: string = '';
  isLoading: boolean = false;

  constructor(private toastr: ToastrService, private loginService: LoginService, private router: Router) {}

  tryLogin() {
    if(this.emailForm == '' || this.passwordForm == ''){
      return;
    }
    
    this.isLoading = true;

    setTimeout(() => {
      this.loginService.authenticate(this.emailForm, this.passwordForm).subscribe(response => {
        const token = (<any>response).Token;
        const user = (<any>response).User;
        const profile = (<any>response).Profile;
  
        sessionStorage.setItem("jwt", token);
        sessionStorage.setItem("user", JSON.stringify(user));
        sessionStorage.setItem("profile", JSON.stringify(profile));
        this.toastr.success("Du er nu logget ind");

        this.router.navigate(["/"]);
      }, err => {
        this.toastr.error("Forkert email eller adgangskode.");
        this.isLoading = false;
      });
    }, 0);
  }

  goToRegister(){
    this.router.navigate(["auth/register"]);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.tryLogin();
    }
  }
}
