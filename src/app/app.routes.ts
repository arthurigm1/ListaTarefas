import { Routes } from '@angular/router';
import { ListComponent } from './modules/to-do-list/pages/list/list.component';

import { LoginComponent } from './moduleslogin/page/login/login.component';

export const routes: Routes = [{
    path:'tarefas',
    component: ListComponent,
},
{
        path:'login',
    component: LoginComponent,
}
    
];
