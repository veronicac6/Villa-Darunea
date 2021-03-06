import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { LoggedOutGuard } from './guards/loggedOut.guard';
import { AdminGuard } from './guards/admin.guard';
import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LightboxModule } from 'ngx-lightbox';


import { HttpRequestsService } from './services/http-requests.service';
import { UserService } from './services/user.service';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { ClientService } from './services/client.service';
import { ReservationService } from './services/reservation.service';
import { RoomService } from './services/room.service';
import { VillaService } from './services/villa.service';

import { SearchByIdPipe} from './pipes/searchById.pipe';
import { SearchByDatePipe } from './pipes/searchByDate.pipe';
import { SearchByNamePipe } from './pipes/searchByName.pipe';
import { SearchByUsernamePipe } from './pipes/searchByUsername.pipe';
import { SortPipe } from './pipes/sort.pipe';
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
import { UsersComponent } from './components/users/users.component';
import { ReservationsComponent } from './components/reservations/reservations.component';



//Array of routes
const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'booking', component: BookingComponent, canActivate: [AuthGuard] },
  // { path: 'booking/:checkIn', component: BookingComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard] },
  { path: 'gallery', component: GalleryComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [LoggedOutGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LoggedOutGuard] },
  // { path: 'about', component: AboutComponent },
  // { path: 'gallery/#resort', component: ResortComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'gallery/#rooms', component: RoomsComponent },
  // { path: 'gallery/#activities', component: ActivitiesComponent }
]

@NgModule({
  declarations: [
    SearchByIdPipe,
    SearchByDatePipe,
    SearchByNamePipe,
    SearchByUsernamePipe,
    SortPipe,
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
    UsersComponent,
    ReservationsComponent
  ],
  imports: [
    LightboxModule,
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    Ng2CarouselamosModule,
    FlashMessagesModule.forRoot(),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCUiyQHus1lGFRpREvjxjs2rdltD7uuKvs' }),
    ReactiveFormsModule,
    Ng2GoogleChartsModule,
    AngularFontAwesomeModule
  ],
  providers: [UserService, VillaService,HttpRequestsService, RoomService, ValidateService, AuthService, AuthGuard, LoggedOutGuard, AdminGuard, ClientService, ReservationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
