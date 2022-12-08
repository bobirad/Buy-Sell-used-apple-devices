import { Component } from '@angular/core';
import { MaterialModule } from '../material-model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [MaterialModule]
})
export class HomeComponent {
  constructor(private router:Router){
  }
  navigate(){
  //do your any operations
  this.router.navigate(['path']);
  //also you can pass like this,
 //  this.router.navigateByUrl(['path']);
  }
}


