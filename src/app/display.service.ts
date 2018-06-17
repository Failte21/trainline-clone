import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {current} from 'codelyzer/util/syntaxKind';

@Injectable({
  providedIn: 'root'
})

export class DisplayService {

  public sideToDisplay: BehaviorSubject<String> = new BehaviorSubject('ad');
  public detail: BehaviorSubject<String> = new BehaviorSubject('ad');

  constructor() { }

  public changeDisplay(newDisplay: String, detail: string) {
    this.sideToDisplay.next(newDisplay);
    this.detail.next(detail);
  }
}
