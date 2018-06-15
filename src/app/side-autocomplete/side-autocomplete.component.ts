import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-autocomplete',
  templateUrl: './side-autocomplete.component.html',
  styleUrls: ['./side-autocomplete.component.css', '../commons/commons.css']
})
export class SideAutocompleteComponent implements OnInit {

  private cityList: String[] = [
    'Paris', 'Paris', 'Paris', 'Paris', 'Paris', 'Paris'
  ];

  constructor() { }

  ngOnInit() {
  }

}
