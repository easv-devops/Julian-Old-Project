import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import {BoxComponent} from "../box/box.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CreateBoxComponent} from "../create-box/create-box.component";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        HttpClientModule,
        MatDialogModule
    ],
  declarations: [HomePage, BoxComponent, CreateBoxComponent]
})
export class HomePageModule {}
