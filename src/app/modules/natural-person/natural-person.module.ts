import { NaturalPersonRoutingModule } from './natural-person-routing.module';
import { NgModule } from '@angular/core';
import { NaturalPersonComponent } from '../../components/natural-person/natural-person.component';
import { SharedModule } from '../shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [SharedModule, RouterModule, NaturalPersonRoutingModule],
  exports: [NaturalPersonComponent, SharedModule],
  declarations: [NaturalPersonComponent],
  providers: [],
})
export class NaturalPersonModule {}
