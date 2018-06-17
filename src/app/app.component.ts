import {Component, OnInit} from '@angular/core';
import {DisplayService} from './display.service';
import {combineLatest, Observable, Subscription} from 'rxjs';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  private displaySubsription: Subscription;
  private sideToDisplay: String;
  private form: FormGroup;
  detail;

  constructor(private displayService: DisplayService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.displaySubsription = combineLatest([
      this.displayService.sideToDisplay, this.displayService.detail
    ]).subscribe(([sideToDisplay, detail]) => {
      this.sideToDisplay = sideToDisplay;
      console.log({detail});
      this.detail = detail;
    });

    this.form = this.fb.group({
      person: this.fb.group({
        ageRange: ['Adult (26-59)', Validators.required],
        discount: null
      }),
      date: this.fb.group({
        depart: [null, Validators.required],
        return: [null, Validators.required]
      })
    });
  }

  formInitialized(name: string, form: FormGroup) {
    this.form.setControl(name, form);
  }
}
