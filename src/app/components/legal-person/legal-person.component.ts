import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CompanyType } from 'src/app/models/company-type.model';
import { mimeType } from './../../form-validators/mimetype-validator';
import { FormService } from './../../services/form.service';
import { GetAsyncDataService } from './../../services/get-async-data.service';

@Component({
  selector: 'app-legal-person',
  templateUrl: './legal-person.component.html',
  styleUrls: ['./legal-person.component.scss'],
})
export class LegalPersonComponent implements OnInit {
  isLoading = false;
  imageURL: string;
  legalPersonForm: FormGroup;
  companyTypes: CompanyType[];
  uploadOptions: {
    nationalId: { title: 'کارت ملی - حداکثر ۲ مگابایت'; value: 0 };
  };

  constructor(
    private getAsyncDataService: GetAsyncDataService,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getAsyncDataService.getCompanyTypes().subscribe((responseData) => {
      this.companyTypes = responseData;
      this.initForm();
      this.isLoading = false;
      this.formService.personTypeFormSub.next(this.legalPersonForm);
    });
  }

  getUploadedImage(event: File): void {
    if (event.size > 2000000) {
      this.imageControl.setErrors({ maximumFilesize: true });
      return;
    }
    this.readImageURL(event);
    this.updateImageField(event);
  }

  closeImagePreview(): void {
    this.imageURL = null;
    this.updateImageField();
  }

  get imageControl(): AbstractControl {
    return this.legalPersonForm.get('document').get('nationalIdImage');
  }

  addFormControl(name: string, formGroup: FormGroup): void {
    this.legalPersonForm.addControl(name, formGroup);
  }

  private initForm(): void {
    this.legalPersonForm = new FormGroup({
      document: new FormGroup({
        nationalIdImage: new FormControl(null, {
          validators: Validators.required,
          asyncValidators: mimeType,
        }),
        documentType: new FormControl('1', {
          validators: Validators.required,
        }),
      }),
    });
  }

  private updateImageField(imageFile: File = null): void {
    this.imageControl.setValue(imageFile);
    this.imageControl.updateValueAndValidity({ onlySelf: true });
  }

  private readImageURL(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
