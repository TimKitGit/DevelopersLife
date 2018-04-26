import { Component, OnInit, AfterViewInit, PipeTransform } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  title: string;
  openSidebar: HTMLElement;
  closeSidebar: HTMLElement;
  openedSedibar: boolean;

  constructor(private defApp: AppComponent) {
    this.title = this.defApp.title;
  }

  ngOnInit() {
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
    document.getElementById('sidebar').style.width = '250px';
    document.getElementById('sidebar').style.overflow = 'overlay';
    document.getElementById('main').style.marginLeft = '250px';
    // document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
  }

  closeNav() {
    this.openedSedibar = false;
    setTimeout(() => {
      document.getElementById('openSidebar').classList.toggle('open');
    }, 100);
    document.getElementById('sidebar').style.width = '7px';
    document.getElementById('sidebar').style.overflow = 'hidden';
    document.getElementById('main').style.marginLeft = '0';
    // document.body.style.backgroundColor = '#fafafa';
  }

  onScroll() {
    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('topToScrollButton').style.top = '-15px'; // .display = 'block';
      } else {
        document.getElementById('topToScrollButton').style.top = '150px'; // .display = 'none';
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

class MyPipe implements PipeTransform {
  transform(value, param) {
    if (param === 'openNav()') {
      return 'closeNav()';
    } else {
      return 'openNav()';
    }
  }
}
