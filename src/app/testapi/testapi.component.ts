import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { Data } from '../testModel';

@Component({
  selector: 'app-testapi',
  templateUrl: './testapi.component.html',
  styleUrls: ['./testapi.component.css']
})
export class TestapiComponent implements OnInit {

  dt: Data[];

  constructor(public apiCall: ApicallService) { }

  ngOnInit() {
    this.apiCall.getDetails().subscribe(d => this.dt = d);
  }

}
