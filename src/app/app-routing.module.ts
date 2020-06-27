import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';//location add
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
//give path and add into this array
{ path : 'home', component : HomeComponent},
{ path : 'profile', component : ProfileComponent},
{ path : 'about', component : AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
