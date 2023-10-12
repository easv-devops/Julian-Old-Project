import {Component, Input, OnInit} from '@angular/core';
import {Box} from "../home/home.page";
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";
import {BoxService} from "../boxservice";

import {CreateBoxComponent} from "../create-box/create-box.component";
import {AlertController, ModalController, ToastController} from "@ionic/angular";

import {Router} from "@angular/router";


@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent  implements OnInit {

  @Input() box: Box | undefined;

  constructor(private http: HttpClient, public service: BoxService, public popup: ModalController, private alertController: AlertController, public toastController: ToastController) { }

  ngOnInit() {}

  async onEditClick(box: Box | undefined) {
    this.service.setBox(box);
    this.service.setIsEditingTrue(true);
    console.log(box);
    const popover = await this.popup.create({component: CreateBoxComponent})
    popover.present();
  }

  async onDeleteClick(box: Box | undefined) {
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      message: 'Do you want to delete this box?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
          },
        },
        {
          text: 'Yes',
          handler: () => {
            this.performDeletion(box);
          },
        },
      ],
    });

    await alert.present();
  }

  performDeletion(box: Box | undefined) {
    const call = this.http.delete('http://localhost:5054/api/boxes/' + box?.id);
    call.subscribe((result) => {
      this.service.boxes = this.service.boxes.filter((xbox) => xbox.id != box?.id);
      this.service.showToast('Box deleted successfully');
    });
  }
}
