import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingListService } from '../services/shopping-list.service';
import { ShoppingList } from '../model/shopping-list';
import { Subscription }   from 'rxjs';

declare var $:any;
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {

  listDetails : any;
  show = false;
  subscription: Subscription;

  constructor( private route: ActivatedRoute, private shoppingService: ShoppingListService) { 
    console.log('shopping data',this.shoppingService.data);
  }

  ngOnInit() {
    console.log('shopping data',this.shoppingService.data);

    this.shoppingService.getShoppingList().subscribe(data => {
      console.log(data);
      this.listDetails = data;
    });
    
    this.subscription =  this.shoppingService.subj$.subscribe(data=>{
      console.log("In list component----->",data);
    });


  }
  ngAfterViewInit(){
      $(document).ready(function() {

        $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
        $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
    });
  }
}
