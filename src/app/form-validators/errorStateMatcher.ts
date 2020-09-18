import { ErrorStateMatcher } from '@angular/material/core';
import { NgForm, FormGroupDirective, FormControl } from '@angular/forms';

export class ConfirmValidParentMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return control.parent.invalid && control.dirty;
  }
}
