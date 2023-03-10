import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemVeiwComponent} from "./views/item-veiw/item-veiw.component";
import {HomeComponent} from "./views/home/home.component";

const routes: Routes = [
  {path:"home",component:HomeComponent},{path:"items",component:ItemVeiwComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
