import { NgModule } from '@angular/core';
import { RouterModule, Routes,CanActivate } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';
import { EdititemComponent } from './edititem/edititem.component';
import { HomeComponent } from './home/home.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'catalog', component: CatalogComponent, canActivate: [AngularFireAuthGuard]},
  {path: 'create', component: CreateComponent, canActivate: [AngularFireAuthGuard]},
  {path: 'edit-listing/:id', component: EdititemComponent, canActivate: [AngularFireAuthGuard] },
  {path: 'catalog/:id', component: ListingDetailsComponent, canActivate: [AngularFireAuthGuard]},
  {path: 'profile/:id', component: ListingDetailsComponent, canActivate: [AngularFireAuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AngularFireAuthGuard]},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
