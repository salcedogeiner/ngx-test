import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudAlgoComponent } from './crud-algo/crud-algo.component';

const routes: Routes = [{
  path: 'crud-algo',
  component: CrudAlgoComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudAlgoRoutingModule { }

export const routedComponents = [
  CrudAlgoComponent,
];
