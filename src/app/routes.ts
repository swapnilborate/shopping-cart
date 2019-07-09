import { Routes } from '@angular/router';

import { ReceipeBookComponent } from './receipe-book/receipe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

export const appRoutes: Routes = [
          { path: 'book-receipe', component: ReceipeBookComponent },
          { path: 'shopping-list', component: ShoppingListComponent },
          { path: '', redirectTo: '/book-receipe', pathMatch: 'full' }
];