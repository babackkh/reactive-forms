import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NaturalPersonComponent } from './../../components/natural-person/natural-person.component';

const routes = [
  {
    path: '',
    component: NaturalPersonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class NaturalPersonRoutingModule {}
