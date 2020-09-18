import { errorMessages } from './../../form-validators/error-messages';
import { RegNumValidator } from './../../form-validators/registration-number-validator';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  Input,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { CompanyType } from 'src/app/models/company-type.model';
import { onlyNumbers } from 'src/app/form-validators/custom-validators';

@Component({
  selector: 'app-legal-info',
  templateUrl: './legal-info.component.html',
  styleUrls: ['./legal-info.component.scss'],
})
export class LegalInfoComponent implements OnChanges, OnInit {
  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Input() companyTypes: CompanyType[];
  legalInfoForm: FormGroup;
  errorMessages = errorMessages;

  constructor(private regNumValidator: RegNumValidator) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.companyTypes.length > 0) {
      this.initForm();
      this.formReady.emit(this.legalInfoForm);
    }
  }

  onlyNumbersValidator(event: KeyboardEvent): boolean {
    return onlyNumbers(event);
  }

  get formControl(): { [key: string]: AbstractControl } {
    return this.legalInfoForm.controls;
  }

  private initForm(): void {
    this.legalInfoForm = new FormGroup({
      companyName: new FormControl(null, {
        validators: Validators.required,
        updateOn: 'blur',
      }),
      companyType: new FormControl(null, {
        validators: Validators.required,
        updateOn: 'blur',
      }),
      registerationNumber: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: this.regNumValidator.regNumValidator(),
        updateOn: 'change',
      }),
      registerationDate: new FormControl(null, {
        validators: Validators.required,
        updateOn: 'blur',
      }),
    });
  }
}
