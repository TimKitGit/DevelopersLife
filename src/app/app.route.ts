import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './_pages/home/home.component';
import { NotFoundPageComponent } from './_pages/not-found-page/not-found-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



const appRoutes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full',
    },
    {
        path: 'home', component: HomeComponent,
        children: [
            {
                path: '', component: SidebarComponent,
            },
        ]
    },
    {
        path: '**', component: NotFoundPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(
        appRoutes, { enableTracing: false }), // <-- debugging purposes only
    ],
    exports: [RouterModule],
    providers: []
})
export class RoutingModule {
}
