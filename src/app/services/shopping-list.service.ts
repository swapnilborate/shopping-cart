import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject  } from 'rxjs';


import { ShoppingList } from '../model/shopping-list';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  data;
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  private sub = new Subject<ShoppingList>();
  subj$ = this.sub.asObservable();
  
  constructor(private http: HttpClient ) { 
    
    console.log("In service -------> ",this.data);
    
      this.getShoppingList().subscribe(data => {
        console.log(data);
        });
     }

    

    public getShoppingList(): Observable<any> {
      return this.http.get("assets/api/data.json");
    }

    public postRecipe(data) {
      console.log("in service ------->", data);
    }

    send(shoppingList: ShoppingList){
     
      this.sub.next(shoppingList);
     // console.log("in service ----------->", this.sub.next(shoppingList));
    }

    changeMessage(message: string) {
      this.messageSource.next(message);
    }
  
}
