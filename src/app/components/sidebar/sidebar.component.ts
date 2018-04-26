import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  closeNav() {
    document.getElementById('sidebar').style.width = '7px';
    document.getElementById('main').style.marginLeft = '0';
    document.body.style.backgroundColor = '#fafafa';
  }
}
