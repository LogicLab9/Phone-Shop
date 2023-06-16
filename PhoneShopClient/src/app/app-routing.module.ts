import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemVeiwComponent} from "./views/Modules/item-veiw/item-veiw.component";
import {HomeComponent} from "./views/home/home.component";
import {ItemFormComponent} from "./views/Modules/item-form/item-form.component";
import {LoginComponent} from "./views/login/login.component";
import {ItemUpdateComponent} from "./views/Modules/item-update/item-update.component";

const routes: Routes = [
  {path: "", component: LoginComponent},
  {
    path: "home", component: HomeComponent,
    children: [
      {
        path: "items", component: ItemVeiwComponent,
      },
      {path: "add", component: ItemFormComponent
      },
      {path:"update/:id",component:ItemUpdateComponent
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
