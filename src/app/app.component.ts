import {Component, OnInit} from '@angular/core';
import {DisplayService} from './display.service';
import {Subscription} from 'rxjs';
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

  constructor(private displayService: DisplayService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.displaySubsription = this.displayService.sideToDisplay.subscribe(sideToDisplay => {
      this.sideToDisplay = sideToDisplay;
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
