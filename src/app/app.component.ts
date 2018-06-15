import {Component, OnInit} from '@angular/core';
import {DisplayService} from './display.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  private displaySubsription: Subscription;
  private sideToDisplay: String;
  constructor(private displayService: DisplayService) {}

  ngOnInit(): void {
    this.displaySubsription = this.displayService.sideToDisplay.subscribe(sideToDisplay => {
      this.sideToDisplay = sideToDisplay;
    });
  }
}
