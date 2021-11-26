import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Activity} from '../models/DST';

@Component({
  selector: 'app-activity-element',
  templateUrl: './activity-element.component.html',
  styleUrls: ['./activity-element.component.scss']
})
export class ActivityElementComponent implements OnInit {

  @Input() activity: Activity;
  @Output() solvedClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
