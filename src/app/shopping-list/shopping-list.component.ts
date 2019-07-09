import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingListService } from '../services/shopping-list.service';

declare var $:any;
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  
})
export class ShoppingListComponent implements OnInit {

  listDetails;
  show = false;
 
  jsonObject;
  constructor( private route: ActivatedRoute, private shoppingService: ShoppingListService) { 
    
  }

  ngOnInit() {

    this.listDetails =[];
    this.jsonObject = this.shoppingService.getMyObject();
    console.log("list is -------->",this.jsonObject);
    this.shoppingService.getShoppingList().subscribe(data => {
     
      data.push(JSON.parse(this.jsonObject));
      this.listDetails = data;
      console.log("list is -------->", this.listDetails);
    });
    
  }
  
  ngAfterViewInit(){
      $(document).ready(function() {

        $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
        $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
    });
  }
}
