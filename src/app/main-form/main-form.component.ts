import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css', '../commons/commons.css']
})
export class MainFormComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();
  private form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      stations: this.fb.group({
        departure: [null, Validators.required],
        arrival: [null, Validators.required],
        via: null
      })
    });

    this.formReady.emit(this.form);
  }
}
