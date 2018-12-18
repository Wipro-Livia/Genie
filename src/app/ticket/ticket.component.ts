import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  submitTicket(){
    this.router.navigate(['/thankyou']);
  }
  ngOnInit() {
  }

}
