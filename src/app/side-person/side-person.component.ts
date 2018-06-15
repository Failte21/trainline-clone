import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-side-person',
  templateUrl: './side-person.component.html',
  styleUrls: ['./side-person.component.css', '../commons/commons.css']
})
export class SidePersonComponent implements OnInit {

  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  private ageRanges: String[] = ['Adult (26-59)', 'Youth (0-25)', 'Senior (60+)'];
  private personForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.personForm = this.fb.group({
      ageRange: ['Adult (26-59)', Validators.required],
      discount: null
    });

    this.formReady.emit(this.personForm);
  }

}
