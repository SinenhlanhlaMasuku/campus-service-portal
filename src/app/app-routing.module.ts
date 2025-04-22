import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TopNavigationComponent } from './shared/top-navigation/top-navigation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'about', component: AboutComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'top-navigation', component:  TopNavigationComponent },
  { path: 'login', component: LoginComponent }, 
  { path: 'register', component: RegisterComponent},
  // { path: 'services', component: ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
