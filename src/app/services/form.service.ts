import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  personTypeFormSub = new Subject<FormGroup>();

  constructor() {}

  personTypeAsObs(): Observable<FormGroup> {
    return this.personTypeFormSub.asObservable();
  }
}
