import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

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

  userForm: FormGroup

  constructor(private router: Router) { }

  submitTicket(){
    this.router.navigate(['/thankyou']);
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      email: new FormControl (''),
      ananame: new FormControl (''),
      user: new FormGroup({
        useremail: new FormControl (''),
        test: new FormArray ([])
      }),
      useremail: new FormControl (''),
      test: new FormArray ([])
    })
  }

  addField(){
    (<FormArray>this.userForm.get('test')).push(new FormControl(''));
  }

}
