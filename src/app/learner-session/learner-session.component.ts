import {Component, OnInit} from '@angular/core';
import {DaCom} from '../com/da-com';
import {ActivatedRoute} from '@angular/router';
import {Activity, DST} from '../models/dst';
import {DSTS} from '../models/DSTS';

@Component({
  selector: 'app-learner-session',
  templateUrl: './learner-session.component.html',
  styleUrls: ['./learner-session.component.scss']
})
export class LearnerSessionComponent implements OnInit {

  public dst: DST;
  public daUUID: string;
  private session = null;

  constructor(private route: ActivatedRoute, private daCom: DaCom) {
  }

  ngOnInit(): void {

    const dst = this.route.snapshot.paramMap.get('dst');
    this.daUUID = this.route.snapshot.paramMap.get('daUUID');
    this.session = this.route.snapshot.paramMap.get('session');

    if (this.daCom.isBaseUrlNull()) {
      const baseUrl = prompt('Please the URL of the KM-EP', '');
      this.daCom.setBaseUrl(baseUrl);
    }

    this.getDST(dst);

  }


  private getDST(dst: string): void {
    this.daCom.getDST(dst).then(d => {
        this.dst = d;
        this.getSession();
      }
    );
  }

  private getSession(): void {
    this.daCom.getSession(this.session).then(d => {
        const session = d;
        this.applySession(session);
      }
    );
  }

  private applySession(session: DSTS): void {
    this.dst.plays.forEach(play => {
      play.acts.forEach(act => {
        act.structures.forEach(structure => {
          structure.activities.forEach(activity => {
            activity.solved = this.checkActivityIsSolved(session, activity);
          });
        });
        act.activities.forEach(activity => {
          activity.solved = this.checkActivityIsSolved(session, activity);
        });
      });
    });
  }

  private checkActivityIsSolved(session: DSTS, activity: Activity): boolean {

    for (const sessionActivity of session.sessionActivities) {
      if (sessionActivity.dstActivityId === activity.id) {
        return sessionActivity.completed === true;
      }
    }

    return false;
  }

  solve(activity: Activity): void {
    console.log(activity);
    this.daCom.solveActivity(this.session, activity.id, this.daUUID).then(d => {
      this.getSession();
    });

  }

}
