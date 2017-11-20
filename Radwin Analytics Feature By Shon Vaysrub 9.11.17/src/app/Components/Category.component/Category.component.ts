import { Component, Input, Output, EventEmitter } from '@angular/core';
import {SubCategory} from 'app/Models/SubCategory/SubCategory'
import { Category } from "app/Models/Category/Category";

@Component({
  selector: 'category',
  templateUrl: './Category.component.html',
  styleUrls: ['./Category.component.css']
})
export class CategoryComponent {

  // Fields
  @Input() getCategoryItem:Category;
  @Output() onSelectCategory = new EventEmitter<any>();
  expandImage:string;
  expanded:boolean;

  // Initiators
  constructor() {
    this.expandImage = "src/app/Images/plusIcon.png";
    this.expanded = false;
  }

  // Functions
  selectCategory(){
    if(!this.getCategoryItem.selected){
      this.onSelectCategory.emit(this.getCategoryItem);
      this.getCategoryItem.selected=true;
    }
    else{
      this.getCategoryItem.selected=false;
    } 
  }

  expandCategory(){
    if(this.expanded){
      this.expandImage = "src/app/Images/plusIcon.png";
      this.expanded = false;
    }
    else{
      this.expandImage = "src/app/Images/minusIcon.png";
      this.expanded = true;
    }
  }

  selectSubCategory(subCategoryItem:SubCategory){
    if(subCategoryItem.isChecked == false){
      subCategoryItem.isChecked = true;
    }
    else{
      subCategoryItem.isChecked = false;
    }
  }
}
