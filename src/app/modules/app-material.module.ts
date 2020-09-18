import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MaterialJalaliMomentAdapterModule } from 'material-jalali-moment-adapter';

const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatRadioModule,
  MatToolbarModule,
  MatCardModule,
  MatSelectModule,
  MatDatepickerModule,
  MaterialJalaliMomentAdapterModule,
];

@NgModule({
  imports: [materialModules],
  exports: [materialModules],
})
export class AngularMaterialModule {}
