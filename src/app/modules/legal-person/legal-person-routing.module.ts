import { LegalPersonComponent } from './../../components/legal-person/legal-person.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes = [
  {
    path: '',
    component: LegalPersonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class LegalPersonRoutingModule {}
