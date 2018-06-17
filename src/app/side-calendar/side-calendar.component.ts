import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatCalendar} from '@angular/material';
import {Moment} from 'moment';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment'; // add this 1 of 4

@Component({
  selector: 'app-side-calendar',
  templateUrl: './side-calendar.component.html',
  styleUrls: ['./side-calendar.component.css', '../commons/commons.css']
})
export class SideCalendarComponent implements OnInit {

  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  timeList = ['6.00', '8.00', '10.00', '12.00', '14.00', '16.00', '18.00', '20.00', '22.00'];
  form: FormGroup;
  date: Moment;
  time: Moment;
  today = moment();
  private fullDate: Moment;

  constructor(private fb: FormBuilder) { }

  @ViewChild(MatCalendar) _datePicker: MatCalendar<Date>;

  ngOnInit() {

    this.form = this.fb.group({
      depart: [null, Validators.required],
      return: [null]
    });

    this.formReady.emit(this.form);

    this._datePicker.selectedChange.subscribe(date => {
      this.date = date;
      this.updateDate();
    });
  }

  updateTime = (time: string) => {
  }

  updateDate = () => {
    const date: Moment = this.date;
    this.form.get('depart').setValue(date);
  }
}
