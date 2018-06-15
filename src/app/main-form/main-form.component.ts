import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AutocompleteService} from '../autocomplete.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css', '../commons/commons.css']
})
export class MainFormComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();
  private form: FormGroup;

  constructor(private fb: FormBuilder, private autoCompleteService: AutocompleteService) {}

  ngOnInit(): void {
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
    })
  }
}
