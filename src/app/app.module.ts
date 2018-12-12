import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TicketComponent } from './ticket/ticket.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

const appRoutes: Routes = [
  { path : 'home', component: HomepageComponent},
  { path : 'ticket', component: TicketComponent},
  { path : 'thankyou', component: ThankyouComponent},
  { path : '', redirectTo: 'home', pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TicketComponent,
    ThankyouComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
