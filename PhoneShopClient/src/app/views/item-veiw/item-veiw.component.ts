import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../service/item.service";
import {Item} from "../../entities/Item";

@Component({
  selector: 'app-item-veiw',
  templateUrl: './item-veiw.component.html',
  styleUrls: ['./item-veiw.component.scss']
})
export class ItemVeiwComponent implements OnInit {
  items: Item[] = [];
  displayedColumns: string[] = [];
  constructor(private itemservice:ItemService) {
  }

  ngOnInit(): void {
    this.loadAll();

  }

  async loadAll(): Promise<void> {
    this.displayedColumns = ['id', 'name', 'price','image','itemCode','statusItem','subCategory','brand'];
    this.items = await this.itemservice.getAll();
  }




}
