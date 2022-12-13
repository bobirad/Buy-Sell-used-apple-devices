import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material-model';
import { AuthService } from '../shared/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, MaterialModule, FormsModule]
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string ='';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
  
  }

  login() {
    this.auth.login(this.email, this.password);
  }
}
