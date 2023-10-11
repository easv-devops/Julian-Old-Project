import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BoxService} from "../boxservice";
import {firstValueFrom} from "rxjs";
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {CreateBoxComponent} from "../create-box/create-box.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private http: HttpClient, public service: BoxService, public popup: ModalController) {
      this.getData();
  }

  async getData() {
    const call = this.http.get<Box[]>('http://localhost:5054/api/inventory');
    const result = await firstValueFrom<Box[]>(call);
    this.service.boxes = result;
  }

  async clickCreateBox() {
    //this.router.navigate(["home/create-box"])
    this.service.setIsEditingTrue(false);
    const popover = await this.popup.create({component: CreateBoxComponent})
    popover.present();
  }
}

export interface Box{
  id: number,
  name: string,
  width: number,
  length: number,
  height: number,
  volume: number,
  material: string,
  inventoryCount: number,
  price: number
}
