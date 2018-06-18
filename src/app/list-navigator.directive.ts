import {Directive, HostListener} from '@angular/core';
import {AutocompleteService} from './autocomplete.service';

@Directive({
  selector: '[appListNavigator]'
})

export class ListNavigatorDirective {

  constructor(private service: AutocompleteService) {}

  @HostListener('keydown', ['$event'])
  navigate(e: Event) {
    switch (e['key']) {
      case 'ArrowDown':
        this.service.navigate('desc');
        e.preventDefault();
        break;
      case 'ArrowUp':
        this.service.navigate('asc');
        e.preventDefault();
        break;
      case 'Enter':
        this.service.setValueWithIndex();
        e.preventDefault();
        break;
    }
  }
}
