import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {DisplayService} from './display.service';
import {AutocompleteService} from './autocomplete.service';

@Directive({
  selector: '[appInputFocus]'
})
export class InputFocusDirective {

  @Input() group: String;

  constructor(
    private el: ElementRef,
    private displayService: DisplayService,
    private autoCompleteService: AutocompleteService
  ) { }

  @HostListener('focus', ['$event'])

  handleFocus(event: Event) {
    const { value, name } = this.el.nativeElement;
    this.displayService.changeDisplay(this.group, name);
    if (this.group === 'departure') {
      this.autoCompleteService.onInputChange(value);
    }
  }
}
