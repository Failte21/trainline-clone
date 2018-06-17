import {Directive, ElementRef, HostListener} from '@angular/core';
import {AutocompleteService} from './autocomplete.service';

@Directive({
  selector: '[appAutocompleteInput]'
})
export class AutocompleteInputDirective {

  constructor(private el: ElementRef, private service: AutocompleteService) {}

  @HostListener('click', ['$event'])
  handleClick() {
    this.service.setValue(this.el.nativeElement.name);
  }

}
