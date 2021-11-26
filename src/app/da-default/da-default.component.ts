import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-da-default',
  templateUrl: './da-default.component.html',
  styleUrls: ['./da-default.component.scss']
})
export class DaDefaultComponent implements OnInit {

  dst: string;
  daUUID: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.dst = this.route.snapshot.paramMap.get('dst');
    this.daUUID = this.route.snapshot.paramMap.get('daUUID');

  }

}
