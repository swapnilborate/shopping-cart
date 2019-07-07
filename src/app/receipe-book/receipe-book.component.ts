import { Component, OnInit, ChangeDetectorRef ,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-receipe-book',
  templateUrl: './receipe-book.component.html',
  styleUrls: ['./receipe-book.component.scss']
})
export class ReceipeBookComponent implements OnInit {
@Input()  receipeData : any;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  one;
  recipeForm = this.fb.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    description: ['', Validators.required],
    iname: ['', Validators.required],
    quantity: ['', Validators.required],
    type: ['', Validators.required],
    file: [null, Validators.required]
  });

  constructor( private route: ActivatedRoute, 
    private fb: FormBuilder, 
    private cd: ChangeDetectorRef,
    private shoppingService: ShoppingListService ) {
      this.one = 'abc';
      console.log("test",this.one);
      this.shoppingService.data = this.one;
     }

  ngOnInit() {
  console.log('service data',this.shoppingService.data);
  }

  onFileChange(event) {
    const reader = new FileReader();
 
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
  
      reader.onload = () => {
        this.recipeForm.patchValue({
          file: reader.result
       });
      
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }

  onSubmit() {
    console.log(this.recipeForm.value);

    var receipeData =  {
                    "name": this.recipeForm.value.name,
                    "ingredients": [
                              {
                                        "quantity": this.recipeForm.value.quantity,
                                        "name": this.recipeForm.value.iname,
                                        "type": this.recipeForm.value.type
                              }
                    ],
                    "imageURL": this.recipeForm.value.file,
                    "description": this.recipeForm.value.description
                   
          };
    this.shoppingService.send(this.recipeForm.value);


    console.log("receipeData is ------->",receipeData);
  }

  resetForm() {
    this.recipeForm.reset();
  }

}
