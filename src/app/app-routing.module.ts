import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component
import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  // homepage
  { path: '', redirectTo: 'surah', pathMatch: 'full'},
  { path: 'surah', component: CardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
