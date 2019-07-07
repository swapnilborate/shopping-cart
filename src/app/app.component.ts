import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-cart';


  constructor(
    private router: Router
) {}

  loadedFeature = 'recipe';
  onNavigate(feature:string){
    this.loadedFeature = feature;
  }
}
