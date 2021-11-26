import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearnerSessionComponent } from './learner-session/learner-session.component';
import {DaCom} from './com/da-com';
import {HttpClientModule} from '@angular/common/http';
import { ActivityElementComponent } from './activity-element/activity-element.component';
import { ErrorComponent } from './error/error.component';
import { DaDefaultComponent } from './da-default/da-default.component';

@NgModule({
  declarations: [
    AppComponent,
    LearnerSessionComponent,
    ActivityElementComponent,
    ErrorComponent,
    DaDefaultComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DaCom
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
