import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RoutingModule } from './app.route';
import { AppComponent } from './app.component';
import { HomeComponent } from './_pages/home/home.component';
import { NotFoundPageComponent } from './_pages/not-found-page/not-found-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AuthComponent } from './auth/auth.component';
import { WebService } from './services/web-services.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundPageComponent,
    SidebarComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
