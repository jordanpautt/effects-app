import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './user/list/list.component';
import { OneUserComponent } from './user/one-user/one-user.component';

const routes: Routes = [
  {
    path: 'home',
    component: ListComponent,
  },
  {
    path: 'user/:id',
    component: OneUserComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
