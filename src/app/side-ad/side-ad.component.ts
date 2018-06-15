import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-ad',
  templateUrl: './side-ad.component.html',
  styleUrls: ['./side-ad.component.css', '../commons/commons.css']
})
export class SideAdComponent implements OnInit {

  private LOGO_EUROSTAR = require('../imgs/eurostar.png');
  private LOGO_SNCF = require('../imgs/sncf.png');
  private LOGO_THALYS = require('../imgs/thalys.png');
  private LOGO_DB = require('../imgs/db.png');
  constructor() { }

  ngOnInit() {
  }

}
