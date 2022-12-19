import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private builder: FormBuilder,
    private router: Router
    ){ }
  ngOnInit(): void {
    this.registerForm = this.builder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      repass: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }
  register(){
    const {email, password, repass} = this.registerForm.value;
    if(email == '' || password == '' || repass == ''){
      alert('All fields required!');
      this.router.navigate(['/register']);
      return;
    }
    if(email.invalid){
      alert('Please input a valid email address!');
      this.router.navigate(['/register']);
      return;
    }
    if(password.invalid){
      alert('Password must me at least 6 characters!');
      this.router.navigate(['/register']);
      return;
    }
    if(password != repass){
      alert('Passwords don\'t match!');
      this.router.navigate(['/register']);
      this.registerForm.reset();
      return;
    }
    this.auth.register(email, password);
  }


}

