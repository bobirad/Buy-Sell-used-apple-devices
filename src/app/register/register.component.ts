import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material-model';
import { AuthService } from '../shared/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule]

})
export class RegisterComponent implements OnInit{
  email: string = '';
  password: string ='';
  repass: string ='';
  constructor(private auth: AuthService){ }

  ngOnInit(): void {
  
  }

  register(){
    if(this.email == ''){
      alert('Please enter email');
      return;
    }
    if(this.password == ''){
      alert('Please enter password');
      return;
    }
    if(this.password != this.repass){
      alert('Passwords don\'t');
    }
    this.auth.register(this.email, this.password);
    this.email = '';
    this.password = '';
  }
  
}

