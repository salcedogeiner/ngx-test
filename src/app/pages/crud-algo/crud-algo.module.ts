import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudAlgoRoutingModule, routedComponents  } from './crud-algo-routing.module';
import { CrudAlgoComponent } from './crud-algo/crud-algo.component';
import { ThemeModule } from '../../@theme/theme.module';
import { UserService } from '../../@core/data/users.service';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    CrudAlgoRoutingModule,
    FormsModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    UserService
  ],
})
export class CrudAlgoModule { }
