import {StatusItem} from "./statusItem";
import {Brand} from "./Brand";
import {SubCategory} from "./subCategory";

export class Item{
  id?:Number;
  name?:String;
  price?:Number;
  image?:String;
  itemCode?:String;
  statusItem?:StatusItem;
  subCategory?:SubCategory;
  brand?:Brand;
}
