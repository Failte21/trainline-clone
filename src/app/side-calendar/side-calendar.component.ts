import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {MatCalendar} from '@angular/material';
import {Moment} from 'moment';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment'; // add this 1 of 4

@Component({
  selector: 'app-side-calendar',
  templateUrl: './side-calendar.component.html',
  styleUrls: ['./side-calendar.component.css', '../commons/commons.css']
})
export class SideCalendarComponent implements OnInit, OnChanges {

  @Input() detail;
  @Input() values;
  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  timeList = ['6.00', '8.00', '10.00', '12.00', '14.00', '16.00', '18.00', '20.00', '22.00'];
  form: FormGroup;
  date: Moment;
  minDate: Moment;
  dateTime;
  title;

  constructor(private fb: FormBuilder) { }

  @ViewChild(MatCalendar) _datePicker: MatCalendar<Date>;

  ngOnInit() {

    this.form = this.fb.group({
      departDate: [null, Validators.required],
      departTime: ["18:00", Validators.required],
      returnDate: [null],
      returnTime: ["18:00"]
    });

    this.formReady.emit(this.form);

    this._datePicker.selectedChange.subscribe(this.updateDate);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.title = `Select a ${this.detail} date`;
    if (this.detail === 'departure') {
      this.date = this.form ? this.form.get('departDate').value : null;
      this.minDate = moment();
    } else {
      this.date = this.form ? this.form.get('returnDate').value : null;
      this.minDate = moment();
    }

    if (this.form) {
      this.dateTime = this.detail === 'departure' ?
        this.form.get('departDate').value ? this.form.get('departTime').value : null :
        this.form.get('returnDate').value ? this.form.get('returnTime').value : null;
    }
  }

  updateTime(time: string) {
    const path = this.detail === 'departure' ? 'departTime' : 'returnTime';
    this.form.get(path).setValue(time);
    this.dateTime = this.detail === 'departure' ?
      this.form.get('departDate').value ? this.form.get('departTime').value : null :
      this.form.get('returnDate').value ? this.form.get('returnTime').value : null;
  }

  updateDate = dateString => {
    const date: Moment = dateString;
    const path = this.detail === 'departure' ? 'departDate' : 'returnDate';
    this.form.get(path).setValue(date);
  }
}
