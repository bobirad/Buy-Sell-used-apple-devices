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
  this.router.navigate(['path']);
  }
}


