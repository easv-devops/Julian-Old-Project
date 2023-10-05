import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-create-box',
  templateUrl: './create-box.component.html',
  styleUrls: ['./create-box.component.scss'],
})
export class CreateBoxComponent{

  constructor(private dialog: MatDialog) { }

  material: string = '';
  width: number = 0;
  length: number = 0;
  height: number = 0;
  volume: number = 0;
  price: string = '';
  inventory: number = 0;

  saveBox() {

  }
}
