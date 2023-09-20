import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  id: Subject<any> = new Subject<any>()
  constructor() { }

  setId(id: string){
     this.id.next(id)
     console.log(id);

  }

  getId(){
    console.log(this.id)
    return this.id.asObservable()
  }
}
