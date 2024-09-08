import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewGifComponent } from './view/view-gif/view-gif.component';
import { ViewHomeComponent } from './view/view-home/view-home.component';

const routes: Routes = [
  { path: '', component: ViewHomeComponent }, 
  { path: 'view-gif', component: ViewGifComponent }, 
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
