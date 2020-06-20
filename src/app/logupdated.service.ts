import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogupdatedService {

  private static count = 0;

  constructor() {
    LogupdatedService.count = LogupdatedService.count+1; 
    console.log('Object : ' + LogupdatedService.count);
   }

   sayHello(name:string){
     return "updated hello" + name; 
   }

}
