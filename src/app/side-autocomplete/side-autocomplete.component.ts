import {Component, HostListener, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AutocompleteService} from '../autocomplete.service';

@Component({
  selector: 'app-side-autocomplete',
  templateUrl: './side-autocomplete.component.html',
  styleUrls: ['./side-autocomplete.component.css', '../commons/commons.css']
})
export class SideAutocompleteComponent implements OnInit, OnChanges {

  @Input() detail;

  private focused = 0;
  private cityList: string[] = [];
  title;

  constructor(private autoCompleteService: AutocompleteService) { }

  ngOnInit() {
    this.autoCompleteService.cityList.subscribe(cityList => {
      this.cityList = cityList;
    });

    this.autoCompleteService.focusedIndex.subscribe(i => {
      this.focused = i;
    });
  }

  ngOnChanges(): void {
    this.title = `Select a ${this.detail} station`;
  }
}
