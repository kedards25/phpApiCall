import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestapiComponent } from './testapi/testapi.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'testapi', pathMatch: 'full'
  },
  {
    path: 'testapi', component: TestapiComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
