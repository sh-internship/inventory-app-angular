import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthenticationGuard } from './core/authentication.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';



const appRoutes: Routes = [
    {
        path: 'profile',
        canActivate: [AuthenticationGuard],
        loadChildren: './profile/profile.module#ProfileModule'
    },
    {
        path: 'devices',
        canActivate: [AuthenticationGuard],
        loadChildren: './devices/devices.module#DevicesModule'
    },
    {
        path: 'identify',
        canActivate: [AuthenticationGuard],
        loadChildren: './identify/identify.module#IdentifyModule'
    },
    {
      path: 'places',
      canActivate: [AuthenticationGuard],
      loadChildren: './places/places.module#PlacesModule'
    },
    {
        path: 'employees',
        canActivate: [AuthenticationGuard],
        loadChildren: './employees/employees.module#EmployeesModule'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRouting { }
