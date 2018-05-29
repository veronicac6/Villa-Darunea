import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import {AuthGuard} from './guards/auth.guard';
import {AgmCoreModule} from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from './services/user.service';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { ClientService } from './services/client.service';
import{ReservationService} from './services/reservation.service';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { ResortComponent } from './components/resort/resort.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { BookingComponent } from './components/booking/booking.component';
import { ClientListComponent } from './components/client-list/client-list.component';



//Array of routes
const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'booking', component: BookingComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  { path: 'gallery', component: GalleryComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'gallery/#resort', component: ResortComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'gallery/#rooms', component: RoomsComponent },
  // { path: 'gallery/#activities', component: ActivitiesComponent }
]

@NgModule({
  declarations: [
    AboutComponent,
    ActivitiesComponent,
    AppComponent,
    ContactComponent,
    DashboardComponent,
    FooterComponent,
    GalleryComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    ResortComponent,
    RoomsComponent,
    ProfileComponent,
    NotfoundComponent,
    BookingComponent,
    ClientListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    Ng2CarouselamosModule,
    FlashMessagesModule.forRoot(),
    AgmCoreModule.forRoot({apiKey:'AIzaSyCUiyQHus1lGFRpREvjxjs2rdltD7uuKvs'})
  ],
  providers: [UserService, ValidateService, AuthService, AuthGuard, ClientService, ReservationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
