import { Component } from '@angular/core';
import {Item} from "../../../entities/Item";
import {Brand} from "../../../entities/Brand";
import {SubCategory} from "../../../entities/subCategory";
import {StatusItem} from "../../../entities/statusItem";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {BrandService} from "../../../service/brand.service";
import {SubcategoryService} from "../../../service/subcategory.service";
import {ItemStatusService} from "../../../service/item-status.service";
import {ItemService} from "../../../service/item.service";
import {DialogComponent} from "../../dialog/dialog.component";

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.scss']
})
export class ItemUpdateComponent {



  private itemCodes: String[] = [];
  private items: Item[] = [];

  private sum: Number[] = []

  private num: Number[] = []
  brands: Brand[] = [];
  newItemCode: String = "";
  subcategories: SubCategory[] = [];
  itemStatuses: StatusItem[] = []
  // item: Item = new Item();
  file!: any;

  itemUpdateForm = new FormGroup({
    name: new FormControl(
      "", [Validators.required,]
    ),
    price: new FormControl(
      "", [Validators.required,]
    ),
    itemCode: new FormControl(),
    image: new FormControl(
      "", [Validators.required,]
    ),
    brand: new FormControl(
      "", [Validators.required,]
    ),
    subcategory: new FormControl(
      "", [Validators.required,]
    ),
    status: new FormControl(
      "", [Validators.required,]
    ),
  });
  private base64textString: any;

  // private picture: String;
  imageUrl?: string='';


  constructor(private dialog: MatDialog, private brandService: BrandService,
              private subcategoryService: SubcategoryService, private itemStatusService: ItemStatusService, private itemService: ItemService) {

    this.itemCodeField.disable();
    this.fillForm();


  }

  get nameField(): FormControl {
    return this.itemUpdateForm.controls.name as FormControl;
  }

  get priceField(): FormControl {
    return this.itemUpdateForm.controls.price as FormControl;
  }

  get itemCodeField(): FormControl {
    return this.itemUpdateForm.controls.itemCode as FormControl;
  }

  // get imageField(): FormControl {
  //   return this.itemUpdateForm.controls.image as FormControl;
  // }

  get brandField(): FormControl {
    return this.itemUpdateForm.controls.brand as FormControl;
  }

  get subCategoryField(): FormControl {
    return this.itemUpdateForm.controls.subcategory as FormControl;
  }


  get statusField(): FormControl {
    return this.itemUpdateForm.controls.status as FormControl;
  }

  async submit() {
    this.getItemCode(this.itemCodes);

    if (!this.itemUpdateForm.invalid) {
      try {

        const brand = new Brand();
        const subcategory = new SubCategory();
        const status = new StatusItem();
        let item = new Item();

        item.name = this.nameField.value;
        item.price = this.priceField.value;
        item.itemCode = this.newItemCode;
        // const formData = new FormData();
        // formData.append("image", file, this.file.name);

        // item.image = this.base64textString;
        brand.id = this.brandField.value;
        this.brands.forEach((x) => {
          if (x['id'] == brand.id) {
            brand.name = x['name']
          }
        });
        item.brand = brand;
        subcategory.id = this.subCategoryField.value;
        this.subcategories.forEach((x) => {
          if (x['id'] == brand.id) {
            subcategory.name = x['name']
          }
        });
        item.subCategory = subcategory
        status.id = this.statusField.value;
        this.itemStatuses.forEach((x) => {
          console.log(x)
          if (x['id'] == brand.id) {
            status.name = x['name']
          }
        });
        item.statusItem = status;

        const formData = new FormData();
        formData.append("image", this.file, this.file.name);
        formData.append("item", JSON.stringify(item));
        const dialogRef = this.dialog.open(DialogComponent, {
          width: '350px',
          data: {title: 'Save Item', message: 'Are you sure you want to Save this item?', itmData: item}
        });
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            // console.log(item)

            // @ts-ignore
            item = this.itemService.add(formData);
            // console.log(this.item)
            this.clearForm();
          } else {
            console.log("No Action")
          }
        });


      } catch (e) {
        console.log(e)
        // @ts-ignore
        // this._snackBar.open(e.error.text, '', {duration: 2000, horizontalPosition: "center", verticalPosition: "top"});
      }
    }
    // console.log(this.getNewCode);
  }

  clearForm() {
    this.itemUpdateForm.reset();
    this.itemUpdateForm.valid;
    this.newItemCode = "";
    this.base64textString = [];
    this.sum = [];
    this.imageUrl='';
  }

  // _handleReaderLoaded(readerEvt: { target: { result: any; }; }) {
  //   var binaryString = readerEvt.target.result;
  //   this.base64textString = btoa(binaryString);
  //   console.log(btoa(binaryString));
  // }

  onChange(event: any) {
    this.file = event.target.files ? event.target.files[0] : '';

    if (this.file) {
      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = () => {
        this.imageUrl = reader.result as string;
        console.log(this.imageUrl)
      };
    }



  }

  ngOnInit(): void {

    this.loadForm();
  }

  getItemCode(itemCodes: String[]) {
    // @ts-ignore
    this.num = itemCodes.map((code) => {
        if (Number.parseInt(code.charAt(1)) == this.brandField.value) {
          if (Number.parseInt(code.charAt(2)) == this.subCategoryField.value) {
            console.log("A")
            this.sum.push(Number.parseInt(code.charAt(3) + code.charAt(4) + code.charAt(5)))
          }
        } else {
          this.newItemCode = "I" + this.brandField.value + this.subCategoryField.value + "001";
        }
      }
    );
    // @ts-ignore
    let total = Math.max(...this.sum) + 1;
    if (total >= 100) {
      this.newItemCode = "I" + this.brandField.value + this.subCategoryField.value + total;
    } else if (total < 100 && total >= 10) {
      this.newItemCode = "I" + this.brandField.value + this.subCategoryField.value + "0" + total;
    } else if (total < 10 && total >= 1) {
      this.newItemCode = "I" + this.brandField.value + this.subCategoryField.value + "00" + total;
    }
    console.log(this.newItemCode);
  }


  img: any;

  private async loadForm(): Promise<void> {
    this.brands = await this.brandService.getAll();
    this.subcategories = await this.subcategoryService.getAll();
    this.itemStatuses = await this.itemStatusService.getAll();
    this.items = await this.itemService.getAll();
    // @ts-ignore
    this.itemCodes = this.items.map((code) => {
      return code["itemCode"]
    });
    // console.log(this.itemCodes)

  }

  fillForm(){

    let i =  sessionStorage.getItem("Item")

    if(i){
      let item = JSON.parse(i)
      console.log(item)
      this.nameField.setValue(item['name'])
      this.priceField.setValue(item['price'])
      this.itemCodeField.setValue(item['itemCode'])
      this.statusField.setValue(item['statusItem']?.['id'])
      this.subCategoryField.setValue(item['subCategory']?.['id'])
      this.brandField.setValue(item['brand']?.['id'])

    }



  }


}







// var file = files[0];
//
// if (files && file) {
//   var reader = new FileReader();
//
//   // @ts-ignore
//   reader.onload =this._handleReaderLoaded.bind(this);
//
//   reader.readAsBinaryString(file);
// }

// }
// //check whether file is selected or not
// if (fileList.length > 0) {
//
//   const file = fileList[0];
//   //get file information such as name, size and type
//   console.log('finfo', file.name, file.size, file.type);
//   //max file size is 4 mb
//   if ((file.size / 1048576) <= 4) {
//     let formData = new FormData();
//     // let info = {id: 2, name: 'raja'}
//     formData.append('image', file, file.name);
//     // formData.append('id', '2');
//     // formData.append('tz', new Date().toISOString())
//     // formData.append('update', '2')
//     // formData.append('info', JSON.stringify(info))
//     this.file = formData
//
//   } else {
//     //this.snackBar.open('File size exceeds 4 MB. Please choose less than 4 MB','',{duration: 2000});
//   }

// }











// shortLink: string = "";
// loading: boolean = false; // Flag variable
// @ts-ignore
// onUpload() {
//   this.loading = !this.loading;
//   console.log(this.file);
//   this.fileUploadService.upload(this.file).subscribe(
//     (event: any) => {
//       if (typeof (event) === 'object') {
//
//         // Short link via api response
//         this.shortLink = event.link;
//
//         this.loading = false; // Flag variable
//       }
//     }
//   );
// }
// afuConfig = {
//   uploadAPI: {
//     url:"https://example-file-upload-api"
//   },
//   theme: "dragNDrop"
// };
