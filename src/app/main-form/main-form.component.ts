import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AutocompleteService} from '../autocomplete.service';
import {DisplayService} from '../display.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css', '../commons/commons.css']
})
export class MainFormComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();
  private form: FormGroup;
  private detail;

  constructor(
    private fb: FormBuilder,
    private autoCompleteService: AutocompleteService,
    private displayService: DisplayService;
  ) {}

  ngOnInit(){
    this.form = this.fb.group({
      stations: this.fb.group({
        departure: [null, Validators.required],
        arrival: [null, Validators.required],
        via: null
      })
    });

    this.formReady.emit(this.form);

    this.form.get('stations.departure').valueChanges.subscribe(v => {
      this.autoCompleteService.onInputChange(v);
    });

    this.form.get('stations.via').valueChanges.subscribe(v => {
      this.autoCompleteService.onInputChange(v);
    });

    this.form.get('stations.arrival').valueChanges.subscribe(v => {
      this.autoCompleteService.onInputChange(v);
    });

    this.autoCompleteService.value.subscribe((value) => {
      const path = `stations.${this.detail}`;
      if (this.detail) {
        this.form.get(path).setValue(value);
      }
    });

    this.displayService.detail.subscribe(detail => {
      this.detail = detail;
    });
  }
}
