import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import routes, { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SpeakerLoginComponent } from './speaker-login/speaker-login.component';
import { ParticipantLoginComponent } from './participant-login/participant-login.component';
import { RouterModule } from '@angular/router';
import { AdminauthService } from './admin-login/adminauth.service';
import { HttpClientModule } from '@angular/common/http';
import { SpeakerDashboardComponent } from './speaker-dashboard/speaker-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ParticipantDashboardComponent } from './participant-dashboard/participant-dashboard.component';
import { ParticipantRegisterComponent } from './participant-register/participant-register.component';
import { TestapiComponent } from './testapi/testapi.component';
import { ApicallService } from './apicall.service';
import { ShowAllEventsComponent } from './EventsCRUD/show-all-events/show-all-events.component';
import { SearcheventComponent } from './EventsCRUD/searchevent/searchevent.component';
import { DeleteeventComponent } from './EventsCRUD/deleteevent/deleteevent.component';
import { UpdateeventComponent } from './EventsCRUD/updateevent/updateevent.component';
import { CreateeventComponent } from './EventsCRUD/createevent/createevent.component';
import { ShowallspeakerComponent } from './SpeakerCRUD/showallspeaker/showallspeaker.component';
import { SearchSpeakerComponent } from './SpeakerCRUD/search-speaker/search-speaker.component';
import { DeletespeakerComponent } from './SpeakerCRUD/deletespeaker/deletespeaker.component';
import { CreatespeakerComponent } from './SpeakerCRUD/createspeaker/createspeaker.component';
import { UpdatespeakerComponent } from './SpeakerCRUD/updatespeaker/updatespeaker.component';
import { SpeakerapicallService } from './SpeakerCRUD/speakerapicall.service';
import { ParticipantService } from './participant-login/participant.service';
import { AdminfeedbackComponent } from './adminfeedback/adminfeedback.component';
import { EventcruddashboardComponent } from './eventcruddashboard/eventcruddashboard.component';
import { SpeakercruddashboardComponent } from './speakercruddashboard/speakercruddashboard.component';
import { gaurdtest } from './gaurd';
import{speakergaurd} from'./speakergaurd'
import { participantgaurd } from './participantgaurd';
import { ContactusComponent } from './contactus/contactus.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { ParentComponent } from './parent/parent.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    SpeakerLoginComponent,
    ParticipantLoginComponent,
    SpeakerDashboardComponent,
    AdminDashboardComponent,
    ParticipantDashboardComponent,
    ParticipantRegisterComponent,
    TestapiComponent,
    ShowAllEventsComponent,
    SearcheventComponent,
    DeleteeventComponent,
    UpdateeventComponent,
    CreateeventComponent,
    ShowallspeakerComponent,
    SearchSpeakerComponent,
    DeletespeakerComponent,
    CreatespeakerComponent,
    UpdatespeakerComponent,
    AdminfeedbackComponent,
    EventcruddashboardComponent,
    SpeakercruddashboardComponent,
    ContactusComponent,
    UpdatepasswordComponent,
    ParentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    // Chart,
  
   
  ],
  providers: [AdminauthService,ApicallService,SpeakerapicallService,ParticipantService,gaurdtest,speakergaurd,participantgaurd],
  bootstrap: [ParentComponent]
})
export class AppModule { }
