import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NotfoundComponent } from './notfound/notfound.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './environments/environments';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
//import { MaterialModule } from './material-model';
import { CatalogComponent } from './catalog/catalog.component';
import { ProfileComponent } from './profile/profile.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { EdititemComponent } from './edititem/edititem.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotfoundComponent,
    CreateComponent,
    EdititemComponent,
    HomeComponent,
    CatalogComponent,
    ProfileComponent,
    ListingDetailsComponent,
    RegisterComponent,
    LoginComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    //MaterialModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
