import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  emailForm: string = '';
  firstNameForm: string = '';
  lastNameForm: string = '';
  passwordForm: string = '';
  repeatPasswordForm: string = '';
  profileNameForm: string = '';

  isLoading: boolean = false;
  createProfile: boolean = false;
  
  constructor(private route: Router, private authService: LoginService){}

  tryRegister(){
    this.isLoading = true;

    setTimeout(() => {
      if(this.stringsArePopulated([this.emailForm, this.firstNameForm, this.lastNameForm, this.passwordForm, this.repeatPasswordForm]) == true) {
        if(!this.emailIsValid(this.emailForm)){
          // Handle invalid email
          console.log("Handle invalid email");
          this.isLoading = false;
          return;
        }
  
        if(!(this.passwordForm == this.repeatPasswordForm)){
          // Handle different passwords
          console.log("Handle different passwords");
          this.isLoading = false;
          return;
        }
  
        if(!(this.createProfile == true)){
          // Handle different passwords
          const createProfile = this.stringsArePopulated([this.profileNameForm]);
          this.isLoading = false;
          return;
        }
  
        this.authService.register(this.emailForm, this.passwordForm, this.firstNameForm, this.lastNameForm, this.createProfile, this.profileNameForm);
        this.isLoading = false;
  
      } else {
        this.isLoading = false;
        console.log("Handle not all inputs populated");
        return;
      }
    }, 1000);

  }

  backToLogin() {
    this.route.navigate(['auth']);
  }

  stringsArePopulated(strings: string[]){
    if(strings.some(x => x == '')) {
      return false;
    } else {
      return true;
    }
  }

  emailIsValid(email: string) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }
}
