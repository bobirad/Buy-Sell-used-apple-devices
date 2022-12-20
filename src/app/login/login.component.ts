import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  email: any;
  password: any;
  loginForm!: FormGroup;

  constructor(
    private auth: AuthService,
    private router: Router

    ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })

    
  }

  onSubmit() {
    const {email, password} = this.loginForm.value;

    if(this.loginForm.invalid) {return;}
    this.auth.login(email, password);
    this.router.navigate(['catalog']);
  }
 
}

/*email: any;
  password: any;
  loginForm!: FormGroup;
  constructor(
    private auth: AuthService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),  
    })
  }

  onSubmit() {
    const {email, password} = this.loginForm.value;

    if(this.loginForm.invalid){ return; }
    this.auth.login(email, password);
    this.router.navigate(['catalog']);
  }
 
}*/