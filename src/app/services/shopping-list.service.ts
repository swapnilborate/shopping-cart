import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor(private http: HttpClient ) { }

    public getShoppingList(): Observable<any> {
      return this.http.get("assets/api/data.json");
    }
    getMyObject() {
      return localStorage.getItem('jsonObject');
    }
    
}
