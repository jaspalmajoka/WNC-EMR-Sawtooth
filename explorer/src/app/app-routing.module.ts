import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StateComponent } from './state/state.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { BlocksComponent } from './blocks/blocks.component';
import { BatchesComponent } from './batches/batches.component';

const routes: Routes = [
  {
    path: 'state', pathMatch: 'full', component: HomeComponent
  },
  {
    path: 'transactions', pathMatch: 'full', component: TransactionsComponent
  },
  {
    path: 'blocks', pathMatch: 'full', component: BlocksComponent
  },
  {
    path: 'batches', component: BatchesComponent
  },
  {
    path: '**', redirectTo: 'state'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
