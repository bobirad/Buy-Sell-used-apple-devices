import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

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
      password: new FormControl('', Validators.required),
      repass: new FormControl('', Validators.required)
    })
  }
  register(){
    const {email, password} = this.registerForm.value;
    this.auth.register(email, password);
  }


}

