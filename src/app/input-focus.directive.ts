import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {DisplayService} from './display.service';

@Directive({
  selector: '[appInputFocus]'
})
export class InputFocusDirective {

  @Input() group: String;

  constructor(private el: ElementRef, private displayService: DisplayService) { }


  @HostListener('focus', ['$event'])

  handleFocus(event: Event) {
    const name: String = this.el.nativeElement.name;
    this.displayService.changeDisplay(this.group);
  }
}
