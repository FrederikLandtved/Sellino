import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  fullName: string = '';
  constructor(private authService: LoginService) {}

  ngOnInit(): void {
    let userObj = JSON.parse(<any>sessionStorage.getItem("user"))
   this.fullName = userObj.firstName + ' ' + userObj.lastName;
  }

  LogOut() {
    this.authService.logOut();
  }
}
