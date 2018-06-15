import {Component, HostListener, OnInit} from '@angular/core';
import {AutocompleteService} from '../autocomplete.service';

@Component({
  selector: 'app-side-autocomplete',
  templateUrl: './side-autocomplete.component.html',
  styleUrls: ['./side-autocomplete.component.css', '../commons/commons.css']
})
export class SideAutocompleteComponent implements OnInit {

  private focused = 'Paris';
  private cityList: string[] = [];

  constructor(private autoCompleteService: AutocompleteService) { }

  ngOnInit() {
    this.autoCompleteService.cityList.subscribe(cityList => {
      this.cityList = cityList;
    });
  }
}
