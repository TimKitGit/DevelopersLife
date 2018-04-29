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
  showBookmarksPage: boolean;

  bookmarkItems = [];

  postItems = [
    {
      id: 1,
      imageUrl: 'https://cdn.dribbble.com/users/1711908/screenshots/4515415/404paperpillar2.gif',
      title: 'Iron Man-esque flying suit sets world speed record',
      innerText: 'This captioned movie shows British inventor Richard Browning ' +
      'setting a Guinness World Record for flying a body-controlled jet-engine-powered ' +
      'suit over a lake in Reading, England, reaching a speed of 32.02 miles per hour.',
      bookmark: false,
      views: 7,
    },
    {
      id: 2,
      imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7d244617998561.5635a605e3323.png',
      title: 'Iron man is fly!',
      innerText: '',
      bookmark: false,
      views: 16,
    },
    {
      id: 3,
      imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/5508a017998561.5635a605cd904.png',
      title: 'Iron man is fly!',
      innerText: '',
      bookmark: false,
      views: 3,
    },
    {
      id: 4,
      imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/4134a417998561.5635a605c6ed2.png',
      title: 'Iron man is fly!',
      innerText: '',
      bookmark: false,
      views: 9,
    },
    {
      id: 5,
      imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/29dd2a17998561.5635a605bf76c.png',
      title: 'Iron man is fly!',
      innerText: '',
      bookmark: false,
      views: 14,
    },
    {
      id: 6,
      imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/29bd6417998561.5635a605ad357.png',
      title: 'MAX-LENGTH: 76',
      innerText: '',
      bookmark: false,
      views: 26,
    },
  ];

  items = [];

  constructor(private defApp: AppComponent, private router: Router) {
    this.title = this.defApp.title;
  }

  ngOnInit() {
    this.items = this.postItems;
    console.log('Get storage Bookmarks: ', JSON.parse(localStorage.getItem('bookmarkItems')));
    this.bookmarkItems = JSON.parse(localStorage.getItem('bookmarkItems'));
    if (this.bookmarkItems) {
      for (const item of this.bookmarkItems) {
        for (let i = 0, len = this.items.length; i < len; i++) {
          if (item.id === this.items[i].id) {
            this.items[i].bookmark = true;
          }
        }
      }
    }

    this.sidebar = document.getElementById('sidebar');
    this.topFunction();
    this.onScroll();
  }

  ngAfterViewInit() {
    document.getElementById('openSidebar').classList.toggle('open');
  }

  showBookmarks() {
    this.showBookmarksPage = true;
    this.items = this.bookmarkItems;
  }
  hideBookmarks() {
    this.showBookmarksPage = false;
    this.items = this.postItems;
  }

  bookmarks(item: any) {
    item.bookmark = item.bookmark ? false : true;
    if (!item.bookmark) {
      this.removeArrayItem(this.bookmarkItems, item);
      localStorage.clear();
      localStorage.setItem('bookmarkItems', JSON.stringify(this.bookmarkItems));
      console.log('Bookmarks: ', this.bookmarkItems);
      console.log('Items: ', this.items);
      console.log('Storage: ', JSON.parse(localStorage.getItem('bookmarkItems')));
    } else {
      this.bookmarkItems = this.bookmarkItems.concat(item);
      localStorage.clear();
      localStorage.setItem('bookmarkItems', JSON.stringify(this.bookmarkItems));
      console.log('Bookmarks: ', this.bookmarkItems);
      console.log('Items: ', this.items);
      console.log('Storage: ', JSON.parse(localStorage.getItem('bookmarkItems')));
    }
  }

  removeArrayItem = (array, element) => {
    const index = array.indexOf(element);
    array.splice(index, 1);
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

