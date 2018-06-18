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
  dateLabels = {depart: null, 'return': null, departTime: '', returnTime: ''};

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
        departDate: [null, Validators.required],
        returnDate: [null],
        returnTime: ["18:00"],
        departTime: ["18:00", Validators.required],
      })
    });

    this.form.valueChanges.subscribe(v => {
      const { date = {} } = v;
      const { departDate, returnDate, departTime, returnTime } = date;
      const departureDateLabel = departDate ? departDate.format('dddd D MMMM YYYY') : '';
      const returnDateLabel = returnDate ? returnDate.format('dddd D MMMM YYYY') : '';
      const departTimeLabel = departDate ? `from ${departTime}` : '';
      const returnTimeLabel = returnDate ? `from ${returnTime}` : '';
      this.dateLabels = {
        'depart': departureDateLabel,
        'return': returnDateLabel,
        'returnTime': returnTimeLabel,
        'departTime': departTimeLabel
      };
    });
  }

  formInitialized(name: string, form: FormGroup) {
    this.form.setControl(name, form);
  }
}
