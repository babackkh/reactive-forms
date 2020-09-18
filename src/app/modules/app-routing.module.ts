import { PersonsComponent } from './../components/persons/persons.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'persons' },
  {
    path: 'persons',
    component: PersonsComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'legal' },
      {
        path: 'legal',
        loadChildren: () =>
          import('./legal-person/legal-person.module').then(
            (m) => m.LegalPersonModule
          ),
        data: { animatioState: 'legal' },
      },
      {
        path: 'natural',
        loadChildren: () =>
          import('./natural-person/natural-person.module').then(
            (m) => m.NaturalPersonModule
          ),
        data: { animatioState: 'natural' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
