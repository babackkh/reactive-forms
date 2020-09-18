import { slideInAnimation } from './../../animations/routing.animation';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  Router,
  ActivatedRoute,
  UrlSegment,
  RouterOutlet,
} from '@angular/router';
import { MatRadioChange } from '@angular/material/radio';
import { FormService } from 'src/app/services/form.service';
import { Observable, concat, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
  animations: [slideInAnimation],
})
export class PersonsComponent implements OnInit, OnDestroy {
  mainForm: FormGroup;
  personValue: string;
  personsTypeObs: Observable<any>;
  routeSegmentObs: Observable<any>;
  subscriptions: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.route.firstChild.url.subscribe((urlSegment: UrlSegment[]) => {
      this.personValue = urlSegment.join('');
    });
    this.formService.personTypeAsObs().subscribe((formGroup: FormGroup) => {
      this.addFormControl(`${this.personValue}Person`, formGroup);
    });

    this.initForm();
    setTimeout(() => {
      console.log(this.mainForm.value);
    }, 5000);
  }

  onPersonChange(event: MatRadioChange): void {
    this.personValue = event.value;
    this.router.navigate([this.personValue], { relativeTo: this.route });
  }

  prepareRoute(outlet: RouterOutlet): boolean {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData.animationState
    );
  }

  addFormControl(name: string, formGroup: FormGroup): void {
    this.mainForm.addControl(name, formGroup);
  }

  saveData(): void {
    if (this.mainForm.invalid) {
      return;
    }
    // GETTING JALALI DATE AND CONVERTING IT NEEDED SOME TIME WHICH I DIDN'T HAVE. SORRY! I'LL FIX IT.
    console.log(this.mainForm.value);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private initForm(): void {
    this.mainForm = new FormGroup({
      personType: new FormControl(this.personValue, Validators.required),
    });
  }
}
