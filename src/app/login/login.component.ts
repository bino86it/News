import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string="";
  password:string="";
  

  constructor(private authService: AuthService) {}


  login(): void {

    const apiKey = '6604472052964e2ab8e33a3c1d303c83';

    
    localStorage.setItem('email', this.email);
    localStorage.setItem('apiKey', apiKey);

    
    this.authService.login(apiKey);
  }

}
