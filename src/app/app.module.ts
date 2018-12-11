import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TicketComponent } from './ticket/ticket.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const appRoutes: Routes = [
  { path : 'ticket', component: TicketComponent},
  { path : 'thankyou', component: ThankyouComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TicketComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
