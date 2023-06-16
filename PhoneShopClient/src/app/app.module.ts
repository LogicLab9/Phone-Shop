import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ItemVeiwComponent} from './views/Modules/item-veiw/item-veiw.component';
import {HomeComponent} from './views/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './views/header/header.component';
import {FooterComponent} from "./views/footer/footer.component";
import {MatLegacyTableModule} from "@angular/material/legacy-table";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ItemFormComponent} from './views/Modules/item-form/item-form.component';
import {LoginComponent} from './views/login/login.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MaterialFileInputModule} from "ngx-material-file-input";
import { DialogComponent } from './views/dialog/dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {NgxMatFileInputModule} from "@angular-material-components/file-input";
import {AngularFileUploaderModule} from "angular-file-uploader";
import { ItemUpdateComponent } from './views/Modules/item-update/item-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemVeiwComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ItemFormComponent,
    LoginComponent,
    DialogComponent,
    ItemUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatLegacyTableModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgbModule,
    MatSnackBarModule,
    MaterialFileInputModule,
    MatDialogModule,
    AngularFileUploaderModule
    // NgxMatFileInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
