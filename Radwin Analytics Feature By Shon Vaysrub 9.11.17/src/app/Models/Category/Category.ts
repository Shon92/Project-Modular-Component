import {SubCategory} from 'app/Models/SubCategory/SubCategory'

export class Category{
constructor(public name: string, public subCategoryList:SubCategory[], public selected:boolean) {}
}