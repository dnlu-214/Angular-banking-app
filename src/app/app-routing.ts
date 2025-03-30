import { provideRouter, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TransactionHistoryComponent } from './transaction-history.component';

const routes: Routes = [
  { path: '', component: AppComponent },  
  { path: 'transaction-history', component: TransactionHistoryComponent },  
];

export const appRouterProviders = [
  provideRouter(routes)  
];

