import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminfeedbackComponent } from './adminfeedback/adminfeedback.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EventcruddashboardComponent } from './eventcruddashboard/eventcruddashboard.component';
import { CreateeventComponent } from './EventsCRUD/createevent/createevent.component';
import { DeleteeventComponent } from './EventsCRUD/deleteevent/deleteevent.component';
import { SearcheventComponent } from './EventsCRUD/searchevent/searchevent.component';
import { ShowAllEventsComponent } from './EventsCRUD/show-all-events/show-all-events.component';
import { UpdateeventComponent } from './EventsCRUD/updateevent/updateevent.component';
import { gaurdtest } from './gaurd';
import { ParticipantDashboardComponent } from './participant-dashboard/participant-dashboard.component';
import { ParticipantLoginComponent } from './participant-login/participant-login.component';
import { ParticipantRegisterComponent } from './participant-register/participant-register.component';
import { participantgaurd } from './participantgaurd';
import { SpeakerDashboardComponent } from './speaker-dashboard/speaker-dashboard.component';
import { SpeakerLoginComponent } from './speaker-login/speaker-login.component';
import { CreatespeakerComponent } from './SpeakerCRUD/createspeaker/createspeaker.component';
import { DeletespeakerComponent } from './SpeakerCRUD/deletespeaker/deletespeaker.component';
import { SearchSpeakerComponent } from './SpeakerCRUD/search-speaker/search-speaker.component';
import { ShowallspeakerComponent } from './SpeakerCRUD/showallspeaker/showallspeaker.component';
import { UpdatespeakerComponent } from './SpeakerCRUD/updatespeaker/updatespeaker.component';
import { SpeakercruddashboardComponent } from './speakercruddashboard/speakercruddashboard.component';
import { speakergaurd } from './speakergaurd';
import { TestapiComponent } from './testapi/testapi.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';

const routes: Routes = [
  {path:'Admin',
  component:AdminLoginComponent
},
{path:'Speaker',
component:SpeakerLoginComponent},
{path:'Contactus',
component:ContactusComponent},
{path:'updatepassword',
component:UpdatepasswordComponent},

{path:'Participant',
component:ParticipantLoginComponent},
{path:'Speakerdashboard',
component:SpeakerDashboardComponent,
canActivate:[speakergaurd]},

{path:'Admindashboard',
component:AdminDashboardComponent, 
canActivate:[gaurdtest],
children:[ {path:'eventcrud',
component:EventcruddashboardComponent,
children:[
  {path:'showallevent',
component:ShowAllEventsComponent},
{path:'searchevent',
component:SearcheventComponent},
{path:'createevent',
component:CreateeventComponent},
{path:'deleteevent',
component:DeleteeventComponent},
{path:'updateevent',
component:UpdateeventComponent},]
}, {path:'speakercrud',
component:SpeakercruddashboardComponent,
children:[ {path:'showallspeaker',
component:ShowallspeakerComponent},
{path:'searchspeaker',
component:SearchSpeakerComponent},
{path:'createspeaker',
component:CreatespeakerComponent},
{path:'deletespeaker',
component:DeletespeakerComponent},
{path:'updatespeaker',
component:UpdatespeakerComponent}]
},
 
{path:'adminfeedback',
component:AdminfeedbackComponent},]},

{path:'Participantdashboard',
component:ParticipantDashboardComponent,
canActivate:[participantgaurd]},
{path:'ParticipantRegister',
component:ParticipantRegisterComponent},
{path:'testapi',
component:TestapiComponent},





];
export default routes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
