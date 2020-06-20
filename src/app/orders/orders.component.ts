import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  message : string; 
  apivalue:any; 
  constructor(private logService: LogService) {

   }

  ngOnInit(): void {

    this.message = this.logService.sayHello("Lazy Loaded Order");
    this.apivalue = this.logService.getValue();

  }


}
