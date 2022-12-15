import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material-model';
import { AuthService } from '../shared/auth.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule]

})
export class RegisterComponent implements OnInit{

  registerForm!: FormGroup;

  email: string = '';
  password: string ='';
  repass: string ='';
  constructor(
    private auth: AuthService,
    private builder: FormBuilder
    ){ }
  ngOnInit(): void {
    this.registerForm = this.builder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  register(){
    const {email, password} = this.registerForm.value;
    this.auth.register(email, password);
  }



  /*
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
    this.repass = '';
  }
    */


}

