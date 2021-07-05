import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // activatedUser=new EventEmitter<boolean>();

  activatedUser=new Subject<boolean>();

  constructor() { }
}


