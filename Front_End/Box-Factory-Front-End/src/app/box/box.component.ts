import {Component, Input, OnInit} from '@angular/core';
import {Box} from "../home/home.page";
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";
import {BoxService} from "../boxservice";

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent  implements OnInit {

  @Input() box: Box | undefined;
  constructor(private http: HttpClient, public service: BoxService) { }

  ngOnInit() {}

  onEditClick() {

  }

  async onDeleteClick(box: Box | undefined) {
    const call = this.http.delete('http://localhost:5054/api/boxes/'+ box?.id);
    const result = await firstValueFrom(call);
    this.service.boxes = this.service.boxes.filter(xbox => xbox.id != box?.id);
  }
}
