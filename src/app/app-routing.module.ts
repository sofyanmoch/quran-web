import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component
import { CardComponent } from './components/card/card.component';

import { CardAyatComponent } from './components/card-ayat/card-ayat.component';

const routes: Routes = [
  // homepage
  { path: '', redirectTo: 'surah', pathMatch: 'full'},
  { path: 'surah', component: CardComponent},
  { path: 'surah/:idSurah', component: CardAyatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
