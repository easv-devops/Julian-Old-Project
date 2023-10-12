import { Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {BoxService} from "../boxservice";
import {Box} from "../home/home.page";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-create-box',
  templateUrl: './create-box.component.html',
  styleUrls: ['./create-box.component.scss'],
})
export class CreateBoxComponent {
  nameInput = new FormControl('', Validators.required);
  materialInput = new FormControl('', Validators.required);
  widthInput = new FormControl('', Validators.required);
  lengthInput = new FormControl('', Validators.required);
  heightInput = new FormControl('', Validators.required);
  volumeInput = new FormControl('', Validators.required);
  priceInput = new FormControl('', Validators.required);
  inventoryInput = new FormControl('', Validators.required);

  formGroup = new FormGroup({
    name: this.nameInput,
    material: this.materialInput,
    width: this.widthInput,
    length: this.lengthInput,
    height: this.heightInput,
    volume: this.volumeInput,
    price: this.priceInput,
    inventory: this.inventoryInput,
  });


  constructor(private dialog: MatDialog, private http: HttpClient, public service: BoxService, private toastController: ToastController) {
    if(service.getIsEditingTrue()){
      this.autoFill(service.getBox());
    }
    this.service.getToast().subscribe((message) => {
      this.toastController
        .create({
          message: message,
          duration: 2000,
          position: 'bottom',
        })
        .then((toast) => {
          toast.present();
        });
    });
  }



  clickSave() {
    if(!this.service.getIsEditingTrue()){
      this.createBox();
    }
    else{
      this.editBox();
    }
    this.dialog.closeAll();
  }

  createBox(){
    this.http.post('http://localhost:5054/api/boxes', this.formGroup.value)
      .subscribe(
        (response) => {
          console.log('Box created successfully', response);
          window.location.reload();
          this.service.showToast('Box created successfully');
        },

        (error) => {
          console.error('Error creating box', error);
          this.service.showToast('Task failed');
        }
      );
  }

  editBox(){
    const box = this.service.getBox();
    this.http.put('http://localhost:5054/api/boxes/'+ box?.id, this.formGroup.value)
      .subscribe(
        (response) => {
          console.log('Box edited successfully', response);
          this.service.showToast('Box edited successfully');
          window.location.reload();
        },
        (error) => {
          console.error('Error editing box', error);
          console.log(this.formGroup.value);
          console.log(box);
          this.service.showToast('Task failed');
        }
      );
  }

  async autoFill(box: Box | undefined){

    this.nameInput.setValue(box?.name || '');
    this.materialInput.setValue(box?.material || '');
    this.widthInput.setValue(box?.width?.toString() || '');
    this.lengthInput.setValue(box?.length?.toString() || '');
    this.heightInput.setValue(box?.height?.toString() || '');
    this.volumeInput.setValue(box?.volume?.toString() || '');
    this.priceInput.setValue(box?.price?.toString() || '');
    this.inventoryInput.setValue(box?.inventoryCount?.toString() || '');
  }

  clickCancel() {
    window.location.reload();
  }
}
