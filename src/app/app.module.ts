import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from "@angular/common/http";
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

//routes
import { appRoutes } from './routes';

//services

import { ShoppingListService } from './services/shopping-list.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReceipeBookComponent } from './receipe-book/receipe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceipeBookComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
