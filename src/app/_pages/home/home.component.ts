import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';
import { UserModel } from '../../_modeles/user';
import { WebService } from '../../services/web-services.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  title: string;
  webServiceSubscribe: Subscription;
  name: string;
  sidebar: HTMLElement;
  openedSedibar: boolean;

  constructor(private defApp: AppComponent, private router: Router) {
    this.title = this.defApp.title;
  }

  ngOnInit() {
    this.sidebar = document.getElementById('sidebar');
    this.topFunction();
    this.onScroll();
  }

  ngAfterViewInit() {
    document.getElementById('openSidebar').classList.toggle('open');
  }
  openNav() {
    this.openedSedibar = true;
    setTimeout(() => {
      document.getElementById('openSidebar').classList.toggle('open');
    }, 100);
    this.sidebar.style.width = '250px';
    this.sidebar.style.overflow = 'overlay';
    document.getElementById('main').style.marginLeft = '250px';
  }

  closeNav() {
    this.openedSedibar = false;
    setTimeout(() => {
      document.getElementById('openSidebar').classList.toggle('open');
    }, 100);
    this.sidebar.style.width = '7px';
    this.sidebar.scrollTop = 0;
    this.sidebar.style.overflow = 'hidden';
    document.getElementById('main').style.marginLeft = '0';
  }

  onScroll() {
    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('topToScrollButton').style.top = '-15px';
      } else {
        document.getElementById('topToScrollButton').style.top = '150px';
      }
    };
  }

  topFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  }
}

