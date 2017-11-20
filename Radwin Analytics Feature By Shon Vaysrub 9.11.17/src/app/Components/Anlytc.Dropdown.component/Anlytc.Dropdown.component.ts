import { Component, OnInit} from '@angular/core';
import {Category} from 'app/Models/Category/Category'
import {CategoryComponent} from 'app/Components/Category.component/Category.component'
import { SubCategory } from "app/Models/SubCategory/SubCategory";

@Component({
  selector: 'anlytc-Dropdown',
  templateUrl: './Anlytc.Dropdown.component.html',
  styleUrls: ['./Anlytc.Dropdown.component.css']
})
export class AnlyticsComponent implements OnInit {

  // Fields
  categoryList: Category[];

  // Initiators
  constructor() {}

  ngOnInit(): void {
    if(this.categoryList == null || this.categoryList == undefined){
    this.categoryList = new Array<Category>();
    this.initMockData();
    }
  }
  
  // Functions
  clearCheckBoxes(){
    this.categoryList.forEach((x)=> x.subCategoryList.forEach((y)=> y.isChecked =false));
  }

  deselectTheRestCategories(selectedItem){
    this.categoryList.filter((x)=> x != selectedItem).forEach((item)=> item.selected = false);
  }

  initMockData(){
    // categories:
    this.categoryList.push(new Category("Phases", new Array<SubCategory>(
      new SubCategory("Tel Aviv", false, false),
      new SubCategory("Akko", false, false)
    ),false
    ));
    this.categoryList.push(new Category("Label", new Array<SubCategory>(
      new SubCategory("Account A", false, false),
      new SubCategory("Account B", false, false)
    ),false
    ));
    this.categoryList.push(new Category("LandMarks", new Array<SubCategory>(
      new SubCategory("City center", false, false),
      new SubCategory("Kaibab national forest", false, false),
      new SubCategory("Flitstones bedrook city", false, false),
      new SubCategory("Plains of fame air museum", false, false),
      new SubCategory("Junior ranger program", false, false)
    ),false
    ));
    this.categoryList.push(new Category("Account type", new Array<SubCategory>(
      new SubCategory("Admin", false, false),
      new SubCategory("Normal", false, false)
    ),false
    ));
  }
}
