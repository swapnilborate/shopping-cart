import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() featureSelected = new EventEmitter();

  constructor( private router: Router ) { }

  onSelect(feature:string){
    this.featureSelected.emit(feature)
    }

    recipesClick(){
      this.router.navigateByUrl('/book');
    }

    listClick(){
      this.router.navigateByUrl('/list');
    }

  ngOnInit() {
  }

}
