import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-person',
  templateUrl: './side-person.component.html',
  styleUrls: ['./side-person.component.css', '../commons/commons.css']
})
export class SidePersonComponent implements OnInit {

  private ageRanges: String[] = ['Adult (26-59)', 'Youth (0-25)', 'Senior (60+)'];
  constructor() { }

  ngOnInit() {
  }

}
