import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../_modeles/user';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { WebService } from '../../services/web-services.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  name: string;
  gender: string;
  age: number;
  ages: any[] = new Array();

  constructor(private router: Router) { }

  ngOnInit() {
    for (let i = 1937; i < 2018; i++) {
      this.ages.push(i);
    }
  }

  doLogin() {
    const isUser = new UserModel();
    isUser.name = this.name;
    isUser.gender = this.gender;
    isUser.age = new Date().getFullYear() - this.age;
    this.router.navigate(['home']);
  }

}
