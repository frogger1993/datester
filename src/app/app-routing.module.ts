import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LearnerSessionComponent} from './learner-session/learner-session.component';
import {ErrorComponent} from './error/error.component';

const routes: Routes = [
  {path: '', component: ErrorComponent},
  {path: 'use/:dst/:daUUID/:session', component: LearnerSessionComponent},
];

@NgModule({
  imports: [BrowserAnimationsModule, RouterModule.forRoot(routes, {useHash: true, enableTracing: true, relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
