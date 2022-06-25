import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { OneUserComponent } from './one-user/one-user.component';

@NgModule({
  declarations: [ListComponent, OneUserComponent],
  exports: [ListComponent, OneUserComponent],
  imports: [CommonModule],
})
export class UserModule {}
