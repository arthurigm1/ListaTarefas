import { Routes } from '@angular/router';
import { ListComponent } from './modules/to-do-list/pages/list/list.component';

import { LoginComponent } from './moduleslogin/page/login/login.component';
import { SignupComponent } from './moduleslogin/page/signup/signup.component';
import { AuthGuard } from './services/auth-guard.service';

export const routes: Routes = [{
    path:'tarefas',
    component: ListComponent,
    canActivate:[AuthGuard]
},
{
        path:'login',
        
    component: LoginComponent,
},
{
        path:'signup',
    component: SignupComponent,
},
{
        path:'',
        
    component: LoginComponent,
}
    
];
