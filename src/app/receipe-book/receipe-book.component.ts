import { Component, OnInit, ChangeDetectorRef ,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-receipe-book',
  templateUrl: './receipe-book.component.html',
  styleUrls: ['./receipe-book.component.scss'],
  providers: [ShoppingListService]
})
export class ReceipeBookComponent implements OnInit {
  
  showSucessMessage: boolean;
  serverErrorMessages: string;
  listDetails : any;
 
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
    private router: Router,
    private fb: FormBuilder, 
    private cd: ChangeDetectorRef,
    private shoppingService: ShoppingListService ) {}

  ngOnInit() {}

  onFileChange(event) {
    const reader = new FileReader();
 
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
  
      reader.onload = () => {
        this.recipeForm.patchValue({
          file: reader.result
       });
        this.cd.markForCheck();
      };
    }
  }

  onSubmit() {
    console.log(this.recipeForm.value);
    localStorage.setItem('jsonObject', JSON.stringify(this.recipeForm.value));
    this.router.navigate(['/shopping-list']);
  }

  resetForm() {
    this.recipeForm.reset();
  }

}
