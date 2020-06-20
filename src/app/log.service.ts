import { Injectable, Inject } from '@angular/core';
import { apiconfigvalue } from './apiconfig.value';

console.log("I am included in final bundle");

@Injectable({
  providedIn:'any'
})
export class LogService {

  private static count = 0; 
  constructor(@Inject(apiconfigvalue) private config) {
    LogService.count = LogService.count +1; 
    console.log('Number of objects created - ' + LogService.count);
   }

   sayHello(name:string){
    return "hello" + name; 
  }
  getValue(){
    return this.config;
  }

}
