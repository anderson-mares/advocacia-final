import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ClientComponent } from "./client/client.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { MasterComponent } from "./master/master.component";
import { ReportsComponent } from "./reports/reports.component";
import { SignupComponent } from "./signup/signup.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    ClientComponent,
    HomeComponent,
    LoginComponent,
    MasterComponent,
    ReportsComponent,
    SignupComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'advocacia-final';
}
