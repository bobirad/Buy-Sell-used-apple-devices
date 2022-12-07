import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../material-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, MaterialModule]

})
export class RegisterComponent {

}
