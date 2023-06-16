import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../../service/item.service";
import {Item} from "../../../entities/Item";
import {Brand} from "../../../entities/Brand";
import {BrandService} from "../../../service/brand.service";
import {FormControl, FormGroup} from "@angular/forms";
import {SubCategory} from "../../../entities/subCategory";
import {SubcategoryService} from "../../../service/subcategory.service";
import {ItemUpdateComponent} from "../item-update/item-update.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-item-veiw',
  templateUrl: './item-veiw.component.html',
  styleUrls: ['./item-veiw.component.scss']
})
export class ItemVeiwComponent implements OnInit {
  items: Item[] = [];
  brands: Brand[] = [];
  subcategories: SubCategory[] = [];

  displayedColumns: string[] = [];

  itemSearchForm = new FormGroup({
    item: new FormControl(),
    brand: new FormControl(),
    subcategory: new FormControl()
  });

  constructor(private itemservice: ItemService, private brandService: BrandService, private subcategoryService: SubcategoryService, private route:Router) {
  }

  get itemField(): FormControl {
    return this.itemSearchForm.controls.item as FormControl;
  }

  get brandField(): FormControl {
    return this.itemSearchForm.controls.brand as FormControl;
  }

  get subCategoryField(): FormControl {
    return this.itemSearchForm.controls.subcategory as FormControl;
  }

  ngOnInit(): void {

    this.loadAll();
  }

  async loadAll(): Promise<void> {
    this.displayedColumns = ['id', 'name', 'price', 'itemCode', 'statusItem', 'subCategory', 'brand','update-col'];
    this.items = await this.itemservice.getAll();
    this.brands = await this.brandService.getAll();
    this.subcategories = await this.subcategoryService.getAll();

  }


  async search() {
    let searchName = this.itemField.value;
    let searchBrand = this.brandField.value;
    let searchSubcategory = this.subCategoryField.value;
    let searchText = '';
    if (searchName != null && searchBrand == null && searchSubcategory == null) {
      searchText = "name=" + searchName
    } else if (searchName == null && searchBrand != null && searchSubcategory == null) {
      searchText = "brand=" + searchBrand
    } else if (searchName == null && searchBrand == null && searchSubcategory != null) {
      searchText = "subcategory=" + searchSubcategory;
    } else if (searchName != null && searchBrand != null && searchSubcategory == null) {
      searchText = "name=" + searchName + "&brand=" + searchBrand;
    } else if (searchName != null && searchSubcategory != null && searchBrand == null) {
      searchText = "name=" + searchName + "&subcategory=" + searchSubcategory;
    } else if (searchName == null && searchSubcategory != null && searchBrand != null) {
      searchText = "brand=" + searchBrand + "&subcategory=" + searchSubcategory;
    } else if (searchName != null && searchBrand != null && searchSubcategory != null) {
      searchText = "name=" + searchName + "&brand=" + searchBrand + "&subcategory=" + searchSubcategory;
    } else {
      await this.loadAll();
    }
    if (searchText != '') {

      // @ts-ignore
      this.items = await this.itemservice.searchAll(searchText);
    }

  }

  clearForm() {
    this.itemSearchForm.reset();
    this.loadAll();
  }

  delete(item:any) {


  }

  onUpdate(item:Item) {

    this.route.navigate(["home/update"]);
    sessionStorage.setItem("Item",JSON.stringify(item))
  }


}
