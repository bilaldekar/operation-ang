import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperationComponent } from './operation/operation.component';
import { OperationCrudComponent } from './operation-crud/operation-crud.component';


const routes: Routes = [
  { path: '', redirectTo: "/operation", pathMatch: "full" },
  { path: 'operation', component: OperationComponent },
  { path: 'crud/:action', component: OperationCrudComponent },
  { path: 'crud/:action/:id', component: OperationCrudComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
