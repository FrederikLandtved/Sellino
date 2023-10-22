import { Component, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  emailForm: string = '';
  passwordForm: string = '';
  isLoading: boolean = false;

  constructor(private loginService: LoginService) {}

  tryLogin() {
    if(this.emailForm == '' || this.passwordForm == ''){
      return;
    }
    
    var ctrl = this;
    this.isLoading = true;

    setTimeout(() => {
      this.loginService.authenticate(this.emailForm, this.passwordForm);
    }, 0);

  }

  handleSuccessfulLogin(data: any){
    console.log(data);
  }

  handleFailedLogin(data: any){
    // Show toast message
    console.log(data);
    this.isLoading = false;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.tryLogin();
    }
  }
}
