import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { ForgetPasswordComponent } from './features/auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './features/auth/reset-password/reset-password.component';
import { ChangePasswordComponent } from './features/auth/change-password/change-password.component';
import { LandingComponent } from './features/landing-page/landing/landing.component';
import { AllBooksComponent } from './features/landing-page/all-books/all-books.component';
import { CartComponent } from './features/landing-page/cart/cart.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { authGuard } from './core/guardes/auth.guard';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'forget',component:ForgetPasswordComponent},
    {path:'reset',component:ResetPasswordComponent},
    {path:'changePass',component:ChangePasswordComponent},
    {path:'landing',canActivate:[authGuard] ,component:LandingComponent},
    {path:'all-books', canActivate:[authGuard] ,component:AllBooksComponent},
    {path:'cart',canActivate:[authGuard] ,component:CartComponent},
    {path:'**',component:NotfoundComponent}
];
