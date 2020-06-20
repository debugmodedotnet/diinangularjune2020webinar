import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  apivalue:any; 
  message : string; 
  constructor(private logService: LogService) {

   }

  ngOnInit(): void {

    this.message = this.logService.sayHello("Lazy Loaded Customers");
    this.apivalue = this.logService.getValue();
  }

}
