import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { UserModel } from '../_modeles/user';

@Injectable()
export class WebService {

  user: Subject<UserModel> = new Subject();

  constructor() { }

}
