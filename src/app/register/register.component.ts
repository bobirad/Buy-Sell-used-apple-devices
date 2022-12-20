import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent implements OnInit{

  registerForm!: FormGroup;
  submited = false;
  email: any;
  password: any;
  repass: any;
  constructor(
    private auth: AuthService,
    private router: Router
    ){ }
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      repass: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }
  onSubmit(){
    const {email, password, repass} = this.registerForm.value;

    if(this.registerForm.invalid) {return;}
    if(repass != password){ alert('Passwords don\'t match'); return; }
    this.auth.register(email, password);
    this.router.navigate(['catalog']);
  }


}

