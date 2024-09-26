import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RickAndMortyComponent } from './rick-and-morty/rick-and-morty.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

const routes: Routes = [
  { path: '', component: RickAndMortyComponent },
  { path: 'detalles/:id', component: CharacterDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
