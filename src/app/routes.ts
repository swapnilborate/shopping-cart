import { Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { ReceipeBookComponent } from './receipe-book/receipe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

export const appRoutes: Routes = [
          {
               path: 'list', component: ShoppingListComponent
          },
          {
               path: 'book', component: ReceipeBookComponent
          }
];