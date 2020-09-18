import { isEmptyInputValue } from './custom-validators';
import { GetAsyncDataService } from '../services/get-async-data.service';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, debounceTime, take, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RegNumValidator {
  constructor(private getAsyncDataService: GetAsyncDataService) {}

  regNumValidator(initialNumber: number = null): AsyncValidatorFn {
    return (
      control: AbstractControl
    ):
      | Promise<{ [key: string]: any } | null>
      | Observable<{ [key: string]: any } | null> => {
      if (isEmptyInputValue(control.value)) {
        return of(null);
      } else if (control.value === initialNumber) {
        return of(null);
      } else {
        return control.valueChanges.pipe(
          debounceTime(500),
          take(1),
          switchMap(() =>
            this.getAsyncDataService
              .checkRegNumber(control.value)
              .pipe(
                map((result) =>
                  result ? { existingRegNum: control.value } : null
                )
              )
          )
        );
      }
    };
  }
}
