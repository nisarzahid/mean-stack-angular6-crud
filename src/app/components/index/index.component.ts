import { Component, OnInit } from '@angular/core';
import { AddunitService } from '../../addunit.service';
import { AdUnit } from './AdUnit';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  adunits: AdUnit[];

  constructor(private adunitservice: AddunitService)  { }

  ngOnInit() {
    this.loadUnits();
  }

  loadUnits() {
    this.adunits = [];
    this.adunitservice
    .getAdUnits()
    .subscribe((data: AdUnit[]) => {
    this.adunits = data;
    console.log(this.adunits);
  });
  }

  deleteAdUnit(id) {
    this.adunitservice.deleteAdUnit(id).subscribe(res => {
      this.loadUnits();
    });
  }
}
