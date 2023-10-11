import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {BoxService} from "../boxservice";

@Component({
  selector: 'app-create-box',
  templateUrl: './create-box.component.html',
  styleUrls: ['./create-box.component.scss'],
})
export class CreateBoxComponent{
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


  constructor(private dialog: MatDialog, private http: HttpClient, private service: BoxService ) {
  }
  clickSave() {
    if(!this.service.getIsEditingTrue()){
      this.createBox();
    }
    else{
      this.editBox();
    }
  }

  createBox(){
    this.http.post('http://localhost:5054/api/boxes', this.formGroup.value)
      .subscribe(
        (response) => {
          console.log('Box created successfully', response);
        },
        (error) => {
          console.error('Error creating box', error);
        }
      );
  }

  editBox(){
    const box = this.service.getBox();
    this.http.put('http://localhost:5054/api/boxes/'+ box?.id, this.formGroup.value)
      .subscribe(
        (response) => {
          console.log('Box edited successfully', response);
        },
        (error) => {
          console.error('Error editing box', error);
          console.log(this.formGroup.value);
          console.log(box);
        }
      );
  }
}
