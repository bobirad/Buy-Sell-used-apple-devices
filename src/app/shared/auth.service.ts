import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isLoggedIn = this.fireauth.currentUser != null


    constructor(public fireauth: AngularFireAuth, private router: Router){}

    //login method
    login(email: string, password: string){
        
        this.fireauth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            localStorage.setItem('token', 'true');
            this.isLoggedIn = true;
            this.router.navigate(['catalog']);
        }, err => {
            alert(err);
            this.router.navigate(['login']);
        })
    
    
    }

    //register method
    register(email: string, password: string){
        this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
            localStorage.setItem('token', 'true');    
            this.isLoggedIn = true;
            this.router.navigate(['catalog']);
        }, err => {
            alert(err.message);
            this.router.navigate(['register']);
        })
    }

    //logout method

    logout(){
        this.fireauth.signOut().then(() => {
            localStorage.clear();
            this.isLoggedIn = false;
            this.router.navigate(['']);
        }, err => {
            alert(err.message);
        })
    }

    
}