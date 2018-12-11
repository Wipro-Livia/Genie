import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  showDetails: boolean = false;

  toggleDetails(): void{
    this.showDetails = !this.showDetails;
  }

  constructor() { }

  ngOnInit() {
  }

}
