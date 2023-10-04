import { Component } from '@angular/core';

@Component({
  selector: 'app-create-box',
  templateUrl: './create-box.component.html',
  styleUrls: ['./create-box.component.scss'],
})
export class CreateBoxComponent{
  constructor() { }
  public alertButtons = ['OK'];
  public alertInputs = [
    {
      placeholder: 'Material',
    },
    {
      placeholder: 'Width',
    },
    {
      placeholder: 'Length',
    },
    {
      placeholder: 'Height',
    },
    {
      placeholder: 'Volume'
    },
    {
      placeholder: 'Price',
    },
    {
      placeholder: 'Inventory'
    }
  ];
}
