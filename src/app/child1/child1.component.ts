import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { LogupdatedService } from '../logupdated.service';

 

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html'
})
export class Child1Component implements OnInit {

  message: string;
  apivalue:any; 
  constructor(private logservice: LogService) {

  }

  ngOnInit(): void {
    this.message = this.logservice.sayHello("Child 1");
    this.apivalue = this.logservice.getValue();

  }

}
