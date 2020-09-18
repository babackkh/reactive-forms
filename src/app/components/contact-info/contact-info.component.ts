import { errorMessages } from './../../form-validators/error-messages';
import { regExps } from './../../form-validators/regExps';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss'],
})
export class ContactInfoComponent implements OnInit {
  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  contactInfoForm: FormGroup;
  errorMessages = errorMessages;

  constructor() {}

  ngOnInit(): void {
    this.initForm();
    this.formReady.emit(this.contactInfoForm);
  }

  get formControl(): { [key: string]: AbstractControl } {
    return this.contactInfoForm.controls;
  }

  private initForm(): void {
    this.contactInfoForm = new FormGroup({
      postalCode: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.min(1000000000),
          Validators.max(9999999999),
        ],
        updateOn: 'blur',
      }),
      phoneNumber: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(12),
          Validators.pattern(regExps.phoneNumber),
        ],
        updateOn: 'blur',
      }),
      mobileNumber1: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.min(9000000000),
          Validators.max(9999999999),
        ],
        updateOn: 'blur',
      }),
      mobileNumber2: new FormControl(null, {
        validators: [
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.min(9000000000),
          Validators.max(9999999999),
        ],
        updateOn: 'blur',
      }),
      email: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.email,
          Validators.pattern(regExps.email),
        ],
        updateOn: 'blur',
      }),
      address: new FormControl(null, {
        validators: Validators.required,
        updateOn: 'blur',
      }),
    });
  }
}
