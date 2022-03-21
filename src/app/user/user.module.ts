import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserComponent } from './components/user/user.component';
import { UserSelectComponent } from './components/user-select/user-select.component';

@NgModule({
  declarations: [UserComponent, UserSelectComponent],
  imports: [CommonModule, FormsModule],
  exports: [UserComponent, UserSelectComponent]
})
export class UserModule {}
