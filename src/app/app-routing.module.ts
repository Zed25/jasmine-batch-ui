import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstQueryPageComponent} from './_pages/query/first/first-query-page.component';
import {SecondQueryPageComponent} from './_pages/query/second/second-query-page.component';
import {ThirdQueryPageComponent} from './_pages/query/third/third-query-page.component';

const routes: Routes = [
  { path: '', component: FirstQueryPageComponent },
  { path: 'queries/first', component: FirstQueryPageComponent },
  { path: 'queries/second', component: SecondQueryPageComponent },
  { path: 'queries/third', component: ThirdQueryPageComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
