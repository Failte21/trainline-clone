import {Component, HostListener, OnInit} from '@angular/core';
import {AutocompleteService} from '../autocomplete.service';

@Component({
  selector: 'app-side-autocomplete',
  templateUrl: './side-autocomplete.component.html',
  styleUrls: ['./side-autocomplete.component.css', '../commons/commons.css']
})
export class SideAutocompleteComponent implements OnInit {

  private focused = 0;
  private cityList: string[] = [];

  constructor(private autoCompleteService: AutocompleteService) { }

  ngOnInit() {
    this.autoCompleteService.cityList.subscribe(cityList => {
      this.cityList = cityList;
    });

    this.autoCompleteService.focusedIndex.subscribe(i => {
      this.focused = i;
    });
  }
}
