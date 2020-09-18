import { SharedModule } from './../shared.module';
import { LegalInfoComponent } from './../../components/legal-info/legal-info.component';
import { ContactInfoComponent } from './../../components/contact-info/contact-info.component';
import { LegalPersonComponent } from './../../components/legal-person/legal-person.component';
import { NgModule } from '@angular/core';
import { LegalPersonRoutingModule } from './legal-person-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule, LegalPersonRoutingModule, SharedModule],
  exports: [
    SharedModule,
    LegalPersonComponent,
    ContactInfoComponent,
    LegalInfoComponent,
  ],
  declarations: [
    LegalPersonComponent,
    ContactInfoComponent,
    LegalInfoComponent,
  ],
  providers: [],
})
export class LegalPersonModule {}
